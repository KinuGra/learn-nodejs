'use strict';

console.log("hello, world");

function greet(name) {
    console.log(
        name == "Tanaka" // === を使うべき
        ? "こんにちは田中さん"
        : `こんにちは田中ではない${name}さん`
    );
}

greet("Tanaka");
greet("Yoshida");