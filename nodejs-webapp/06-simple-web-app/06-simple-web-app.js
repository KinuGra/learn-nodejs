// 変数宣言をしないx = 10などを防ぐStrict Mode
"use strict";

const port = 3000;
const http = require("http"); // Nodeの標準HTTPモジュール読み込み
// httpという組込みモジュールで、
// 内部的にはTCPソケットを扱う、HTTPヘッダを解析すると言った処理が実装されている

// Node.jsの最小HTTPサーバー
// NOTE:
// OSのTCP通信を使ってTCPサーバーを立て
// HTTPリクエストを受け取り
// HTTPレスポンスを返す

// TCPサーバーを作成、クライアントが接続するとコールバックを実行
const server = http.createServer((request, response) => { // request: クライアントから送られた情報、URL、メソッド、body　response：サーバー側が返すデータを構築するためのオブジェクト
    // HTTPレスポンスのヘッダーを設定：200（成功）
    response.writeHead(200, {
        "Content-Type": "text/html" // ブラウザにこれはHTMLですよと伝える
    });

    // レスポンスボディ
    const responseMessage = `<h1>Hello Node.js!!!</h1><h2>${port}</h2>`;
    response.write(responseMessage);
    // レスポンス終了
    // これがないと接続が閉じず、ブラウザが待ち続ける
    response.end();
    console.log(`Sent a reponse : ${responseMessage}`);
});

// ポート待機
// OSに「3000番ポートを使わせて」とお願いしている
// 内部ではTCPソケット作成、3000番にバインド、イベント待ち（Event Loop）
server.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);