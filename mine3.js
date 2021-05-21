
var ball=document.getElementById("ball");
var big=document.getElementById("big");
var sco=document.getElementById("score");
var dx=1;
var dy=5;
big.style.width=String(400);
ball.style.left='180';
ball.style.top='0';
var x=180;
var y=0;
var left=document.getElementById("left");
var right=document.getElementById("right");
var space=false;
var basket_place;
var score=0;
var flag=true;
var topBall=parseInt(ball.style.top,10);
var rightBasket;
var leftBasket;
right.style.display="none";
left.style.display="none";
var borderLeft=false;
var borderRight=false;
var myball=document.getElementById("myball");
function moveBall()
{
    
    topBall+=dy;
    ball.style.top=String(topBall);
    
}

addEventListener("keydown",function(Event){
   
    if(Event.keyCode==32)
        {
            space=true;
            
        }
    
});


addEventListener("keyup",function(Event){
   
    if(Event.keyCode==32)
        {
            space=false;
            
        }
});





function movePlace()
{
    
        
         if(flag==false)
             {
                 if(right.style.display=="none")
                     {
                         rightBasket=Math.round(Math.random()*450+50);
                         right.style.top=String(rightBasket);
                         right.style.display="block";
                         left.style.display="none";
                         
                     }
                 
             }
        else
            {
                if(left.style.display=="none")
                    {
                        leftBasket=Math.round(Math.random()*450+50);
                        left.style.top=String(leftBasket);
                        left.style.display="block";
                        right.style.display="none";
                    }
            }
    
               
        
}






function knowBasket()
{
    if(left.style.display=="block")
        {
            basket_place="l";
        }
    else
        {
            basket_place="r";
        }
    return basket_place;
}





function handling()
{
    if(left.style.display=="block")
        {
          
            if(x<=2)
                {
                    borderLeft=true;
                }
            if(borderLeft)
                {
                    x+=.8;
                }
            if(borderLeft==false)
                {
                    x-=.8;
                }
            if(x>2)
                {
                    borderLeft=false;
                }
            
        }
    else if (right.style.display=="block")
        {
            
            if(x>=355)
                {
                    borderRight=true;
                }
            if(borderRight)
                {
                    x-=.8;
                }
            if(borderRight==false)
                {
                    x+=.8;
                }
            if(x<355)
                {
                    borderRight=false;
                }
        }
            dy=-1.6;
            console.log(y)
            
    ball.style.left=String(x);
}
y-=dy;



function fallInBasket()
{
    if(left.style.display=="block")
        {
            if(Math.round(topBall)==leftBasket||(Math.round(topBall)==leftBasket-1)||Math.round(topBall)==leftBasket+1)
                {
                    if(x<=20&&x>=0)
                        {
                            
                            score+=1;
                            
                            flag=false;
                            
                        }
                }
        }
    else
    {
        if(Math.round(topBall)==rightBasket||(Math.round(topBall)==rightBasket-1)||Math.round(topBall)==rightBasket+1)
                {
                    if(x<=360&&x>=340)
                        {
                            score+=1;
                            flag=true;
                            
                        }
                }
        
    }
    sco.innerHTML="Score : "+score;
     
    
}


function drow()
{
    movePlace();
    if(space)
        {
            
            handling();
            ball.style.transform="rotate(360deg)";
        }
    else
        {
            
            fallInBasket();
            
            dy=2;
        }
    
    moveBall();
}
setInterval(drow,5);