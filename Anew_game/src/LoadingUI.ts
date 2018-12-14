//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
    }

    private textField: egret.TextField;
    private handle: egret.Bitmap;

    private _bg: Background= new Background();

    public createView(): void {
        let loading = new egret.Bitmap();
        loading.width = 640;
        loading.height = 1138;
        loading.texture = RES.getRes("loading_png");
        this.addChild(loading);

        let handleBase = new egret.Sprite();
        handleBase.x = 78;
        handleBase.y = 922;
        handleBase.width = 500;
        handleBase.height = 40;
        this.addChild(handleBase);

        this.handle = new egret.Bitmap();
        this.handle.x = 0;
        this.handle.y = 0;
        this.handle.texture = RES.getRes("loadHandle_png");
        this.handle.width = 0;

        this.handle.scale9Grid = new egret.Rectangle(10,15,358,1);
        handleBase.addChild(this.handle);

        this.textField = new egret.TextField();
        handleBase.addChild(this.textField);
        this.textField.y = 6;
        this.textField.width = 500;
        this.textField.height = 40;
        this.textField.textAlign = "center";
        this.textField.size = 24;
        this.textField.bold = true;
        this.textField.stroke = 3;
        this.textField.italic = true;
        this.textField.strokeColor = 0x22712A;
    }
    public onProgress(current: number, total: number): void {
        this.handle.width = current * 500 / total;
        let num = Math.floor((current/total)* 100);
        this.textField.text = `Loading...`+ num +"%";
        
    }
}
