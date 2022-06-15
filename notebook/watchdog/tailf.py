import time
import pandas as pd
from watchdog.observers import Observer
from watchdog.events import PatternMatchingEventHandler
from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS
from influxdb_client.client.flux_table import FluxTable
import datetime
import sys

DIRECTORY = './watch/'
FILE = sys.argv[1]
PATH = DIRECTORY + FILE


class InfluxDBContext():
    def __init__(self) -> None:
        # InfluxDBサーバーのIPアドレスとポート
        url = "http://localhost:8086"
        # 対象organization
        org = "nnao45"
        # 対象bucket
        self.bucket = "lab"
        # 発行したToken
        token = "a5MLHcVrgLgeemWgvTnvNwx83ay4at6l9mmEjB8Zm8KxTr5VHYto-qYMyizBQ0tsORqdaxt3LK2xs1IjCnE6vw=="

        client = InfluxDBClient(url=url, token=token, org=org, enable_gzip=True)
        self.write_api = client.write_api(write_options=SYNCHRONOUS)

    def write_gatling_record(self, df: pd.DataFrame):
        df_target = df.to_numpy()
        for d in df_target:
            if d[0] == "REQUEST":
                p = Point("gatlingLogTest").tag("experiment", "exp_test_12345").field("status", d[6]).time(datetime.datetime.fromtimestamp(int(d[4])/1000).isoformat() + "Z")
                self.write_api.write(bucket=self.bucket, record=p)

class TextFileEventHandler(PatternMatchingEventHandler):
    def __init__(self, patterns=['*.csv'], ignore_patterns=None, ignore_directories=True, case_sensitive=False):
        super().__init__(patterns, ignore_patterns, ignore_directories, case_sensitive)
        self.context = InfluxDBContext() 
        df = pd.read_csv(PATH, delimiter='\t', header=None)
        self.len_df = len(df)
   
    # 監視対象のファイルに変更があった時に実行
    def on_modified(self, event):
        # 指定のファイル以外は弾いておく
        if event.src_path[-len(FILE):] != FILE:
            return
        try:
            df = pd.read_csv(PATH, skiprows=self.len_df, delimiter='\t', header=None)
        except Exception as e:
            print(e)
            return
        pre_len_df = self.len_df
        self.len_df += len(df)

        if pre_len_df == 0 | self.len_df == 0:
            return
        print_df(df=df)
        self.context.write_gatling_record(df=df)


def print_df(df):
    print(df.to_string(index=False, header=None))

def main():

    # 監視
    observer = Observer()
    observer.schedule(TextFileEventHandler(), DIRECTORY, recursive = False)
    observer.start()

    try:
        while True:
            time.sleep(5)
    except KeyboardInterrupt:
        observer.unschedule_all()
        observer.stop()

main()