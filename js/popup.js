Raphael.fn.popup=function(x,y,text,size){
    txtattr = { font:"12px Helvetica, Arial, sans-serif" };
    size = size || 5;
    text = text || "";
    var res = this.set(),
        d=3;
    res.push(this.path().attr({ fill:"#333333", stroke:"#333333" }));
    res.push(this.text(x,y,text).attr(txtattr).attr({ fill:"#fff","font-family":"Helvetica, Arial" }));
    res.update = function(X,Y,WIDTH) {
        X = X||x;
        Y = Y||y;
        //console.log(X, this[1].getBBox().width);
        var mmax = Math.max,
            mmin = Math.min,
            bb = this[1].getBBox(),
            w = bb.width/2,
            h = bb.height/2,
            dir = (X-bb.width<15) ? 3 : 1;
        //console.log(dir);
        var X = (dir==1) ? X: X+WIDTH,
            dx = [ 0, w+size*2, 0, -w-size*2 ],
            dy = [ -h*2-size*3, -h-size, 0, -h-size ],
            p = [
                "M",X-dx[dir],Y-dy[dir],
                "l",-size,(dir==2)*-size,-mmax(w-size,0),0,
                "a",size,size,0,0,1,-size,-size,
                "l",0,-mmax(h-size,0),(dir==3)*-size,-size,(dir==3)*size,-size,0,-mmax(h-size,0),
                "a",size,size,0,0,1,size,-size,
                "l",mmax(w-size,0),0,size,!dir*-size,size,!dir*size,mmax(w-size,0),0,
                "a",size,size,0,0,1,size,size,
                "l",0,mmax(h-size,0),(dir==1)*size,size,(dir==1)*-size,size,0,mmax(h-size,0),
                "a",size,size,0,0,1,-size,size,
                "l",-mmax(w-size,0),0,
                "z"
            ].join(","),
            xy = [ {x:X,y:Y+size*2+h}, {x:X-size*2-w,y:Y}, {x:X,y:Y-size*2-h}, {x:X+size*2+w,y:Y} ][dir];
        xy.path = p;
        this.attr(xy);
        return this;
    };
    return res.update(x,y);
};

