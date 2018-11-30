var robo_posx=5;        
var robo_posy=1;
var bw ;
var bh;
var x= 35+(robo_posx*80)-80;
var y= 35+(robo_posy*80)-80;
var p = 20;
var dx = 80;
var dy = 80;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var fileData,fileData_conf;
var array,array1;
var allText,i=0;
var count=0,count1=0,count2=0,flag=0,flag1=0,flag2=0,coin_count=0;
var drop_cnt=0;
var flag_drop=0,flag_drop1=0,flag_drop2=0;
var a=0,b=0,drop1_x=0,drop1_y=0,drop2_x=0,drop2_y=0;
function readFile()
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "input/command.txt", true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            fileData = rawFile.responseText;
	}
    }
    rawFile.send();
    return fileData;
}
function configure()
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "input/config", true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            fileData1 = rawFile.responseText;
	}
    }
    rawFile.send();
    return fileData1;
}

function fileopr()
{
    fileData=readFile();
    array = fileData.split('\n');
}
function config_opr()
{
    
    fileData1=configure();
    array1 = fileData1.split('\n');
    var xpos=array1[0];
    var xb=array1[1];
    var coin2=array1[2];
    var wall=array1[3];
    temp=xpos.split(' ');
    temp1=xb.split(' ');
    temp2=coin2.split(' ');
    temp3=wall.split(' ');
    config_opr.no_w = temp[0];
    config_opr.no_c=temp[1];
    config_opr.coin1_x=temp1[0];
    config_opr.coin1_y=temp1[1];
    config_opr.coin2_x=temp2[0];
    config_opr.coin2_y=temp2[1];
    config_opr.coin3_x=temp3[0];
    config_opr.coin3_y=temp3[1];
}
function drawBoard() 
{
    for (var n = 0; n <= bw; n += 80)
    {
        context.moveTo(0.5 + n + p, p);
        context.lineTo(0.5 + n + p, bh + p);
    }
    for (var m = 0; m <= bh; m += 80)
    {
        context.moveTo(p, 0.5 + m + p);
        context.lineTo(bw + p, 0.5 + m + p);
    }
    context.strokeStyle = "black";
    context.stroke();
}

function drawRobo()
{
    var img = new Image();
    img.onload = function () {
	context.drawImage(img, x,y,55,55);
    }
    img.src = "img/robo.jpg";
}

function drawCoin()
{
    var img = new Image();
    img.onload = function () {
	context.drawImage(img,coin1_x_x,coin1_x_y,50,50);
    }
    img.src = "img/coin.jpg";
}
function drawCoin1()
{
    var img = new Image();
    img.onload = function () {
	context.drawImage(img, coin2_x_x,coin2_x_y,50,50);
    }
    img.src = "img/coin.jpg";
}
function drawCoin3()
{
    var img = new Image();
    img.onload = function () {
	context.drawImage(img, coin3_x_x,coin3_x_y,50,50);
    }
    img.src = "img/coin.jpg";
}
function drawWall()
{
    var img = new Image();
    img.onload = function () {
	context.drawImage(img, 120,440,50,50);
    }
    img.src = "img/wall.jpg";
}

function  drop_coin1(x,y)
{
    var img = new Image();
    img.onload = function () {
	context.drawImage(img, x,y,50,50);
    }
    img.src = "img/coin.jpg";
}
function  drop_coin2(x,y)
{
    var img = new Image();
    img.onload = function () {
	context.drawImage(img, x,y,50,50);
    }
    img.src = "img/coin.jpg";
}
function  drop_coin3(x,y)
{
    var img = new Image();
    img.onload = function () {
	context.drawImage(img, x,y,50,50);
    }
    img.src = "img/coin.jpg";
}
function clear()
{
  ctx.clearRect(0, 0, bw+100, bh+100);
}

function run()
{
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
   var timer= setInterval(All_function_call,800);
}

function make_Moves()
{
    var s=array[i++];
    switch (s)
    {
	case "up":
	if (y - dy > 0)
             {
		 if(x==coin1_x_x && y==coin1_x_y)
		 {
		     count++;
		     if(count==1)
		     {
			 alert("Coin picked");
			 flag=1;
			 coin_count++;
		     }
		     else
		     {
			 y -= dy;
		     }
		 }
		 if(x==coin2_x_x && y==coin2_x_y)
		 {
		     count1++;
		     if(count1==1)
		     {
			 alert("Coin picked");
			 flag1=1;
			 coin_count++;
		     }
		     else
		     {
			 y -= dy;
		     }
		 }
		 if(x==coin3_x_x && y==coin3_x_y)
		 {
		     count2++;
		     if(count2==1)
		     {
			 alert("Coin picked");
			 flag2=1;
			 coin_count++;
		     }
		     else
		     {
			 y -= dy;
		     }
		 }
		 else
		 {
		     y -= dy;
		 }
             }
	else
	{
	    alert("Wrong Direction");
	}
            break;
        case "down":  
             if (y + dy < bh )
	    {
		 if(x==coin1_x_x && y==coin1_x_y)
		 {
		     count++;
		     if(count==1)
		     {
			 alert("Coin picked");
			 flag=1;
			 coin_count++;
		     }
		     else
		     {
			 y += dy;
		     }
		 }
		if(x==coin2_x_x && y==coin2_x_y)
		{
		    count1++;
		    if(count1==1)
		    {
			alert("Coin picked");
			flag1=1;
			 coin_count++;
		    }
		     else
		    {
			y += dy;
		    }
		}
		if(x==coin3_x_x && y==coin3_x_y)
		{
		    count2++;
		    if(count2==1)
		    {
			alert("Coin picked");
			flag2=1;
			coin_count++;
		    }
		     else
		    {
			y += dy;
		    }
		}
		else
		{
		    y += dy;
		}
	    }
	else 
	{
	    alert("Wrong Direction");
	}
	    break ;
	case "left":  
	    if (x - dx > 0  )
	     {
		 if(x==coin1_x_x && y==coin1_x_y)
		 {
		     count++;
		     if(count==1)
		     {
			 alert("Coin picked");
			 flag=1;
			 coin_count++;
		     }
		     else
		     {
			x -= dx;
		     }
		 }
		 if(x==coin2_x_x && y==coin2_x_y)
		 {
		     count1++;
		     if(count1==1)
		     {
			 alert("Coin picked");
			 flag1=1;
			 coin_count++;
		     }
		     else
		     {
			 x -= dx;
		     }
		 }
		 if(x==coin3_x_x && y==coin3_x_y)
		 {
		     count2++;
		     if(count2==1)
		     {
			 alert("Coin picked");
			 flag2=1;
			 coin_count++;
		     }
		     else
		     {
			x -= dx;
		     }
		 }
		 else
		 {
		    x -= dx;
		 }
	     }
	    else
	    {
		alert("Wrong Direction");
	    }
	    break;
	case "right":  
        	if (x + dx < bw )
	         {
		     if(x==coin1_x_x && y==coin1_x_y)
		     {
			 count++;
			 if(count==1)
			 {
			     alert("Coin picked");
			     flag=1;
			     coin_count++;
			 }
			 else
			 {
			    x += dx;
			 }
		     }
		     if(x==coin2_x_x && y==coin2_x_y)
		     {
			 count1++;
			 if(count1==1)
			 {
			     alert("Coin picked");
			     flag1=1;
			     coin_count++;
			 }
			 else
			 {
			     x += dx;
			 }
		     }
		     if(x==coin3_x_x && y==coin3_x_y)
		     {
			 count2++;
			 if(count2==1)
			 {
			     alert("Coin picked");
			     flag2=1;
			     coin_count++;
			 }
			 else
			 {
			     x += dx;
			 }
		     }
		     else
		     {
			x += dx;
		     }
		 }
	    else
	     {
	 	alert("Wrong Direction");
	     }
	break;
	case "drop":
	if(coin_count<1)
	{
	    alert("No coin left");
	}
	else
	{
	    drop_cnt++;
	    if(drop_cnt==1)
	    {
		flag_drop=1;
		a=x,b=y;
		coin_count--;
	    }
	    if(drop_cnt==2)
	    {
		flag_drop1=1;
		drop1_x=x;drop1_y=y;
		coin_count--;
	    }
	    if(drop_cnt==3)
	    {
		flag_drop2=1;
		drop2_x=x;drop2_y=y;
		coin_count--;
	    }
	x}
	break;
	
    }
}

function init_var()
{
   
    bw = config_opr.no_w*80;
    bh = config_opr.no_c*80;
    canvas.width  = bw+70;
    canvas.height = bh+70;
    coin1_x_x=35+(config_opr.coin1_x*80)-80;
    coin1_x_y=35+(config_opr.coin1_y*80)-80;
    coin2_x_x=35+(config_opr.coin2_x*80)-80;
    coin2_x_y=35+(config_opr.coin2_y*80)-80;
    coin3_x_x=35+(config_opr.coin3_x*80)-80;
    coin3_x_y=35+(config_opr.coin3_y*80)-80;
}
function Set_Gradient()
{
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    var my_gradient=ctx.createLinearGradient(0,0,0,170);
    my_gradient.addColorStop(0,"#ff00cc");
    my_gradient.addColorStop(1,"#333399");
    ctx.fillStyle=my_gradient;
    ctx.fillRect(20,20,bw,bh); 
}

function pick_coin()
{
    if(flag==0)
    {
	drawCoin();
    }
    if(flag1==0)
    {
	drawCoin1();
    }
    if(flag2==0)
    {
	drawCoin3();
    }
    if(flag_drop==1)
    {
	drop_coin1(a,b);
    }
    if(flag_drop1==1)
    {
	drop_coin2(drop1_x,drop1_y);
    }
    if(flag_drop2==1)
    {
	drop_coin3(drop2_x,drop2_y);
    }
    context.font = '15pt Aria';
    context.fillStyle = 'black';
    ctx.fillText(coin_count,x+3,y+3);
    
}
function clear_screen()
{
    clear();
    context.fillStyle = "black";
    context.strokeStyle = "white";
}
function All_function_call()
{
    clear_screen();
    fileopr();
    config_opr();
    init_var();
    Set_Gradient();
    drawBoard();
    drawRobo();
    make_Moves();
    pick_coin();
    drawWall();
}
run();
