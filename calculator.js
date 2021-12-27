var w1 = 0.0;
var w2 = 0.0;
var w3 = 0.0;
var w4 = 0.0;

var g1a = 0.0;
var g1b = 0.0;
var g2a = 0.0;
var g2b = 0.0;
var g3a = 0.0;
var g3b = 0.0;
var g4a = 0.0;
var g4b = 0.0;

var f1 = 0.0;
var f2 = 0.0;
var f3 = 0.0;
var f4 = 0.0;

var x = 0;

//what if one activity is not provided?
function read()
{
    w1 = parseFloat(document.getElementById("a1weight").value);
    w2 = parseFloat(document.getElementById("a2weight").value);
    w3 = parseFloat(document.getElementById("a3weight").value);
    w4 = parseFloat(document.getElementById("a4weight").value);

    g1a = parseFloat(document.getElementById("a1grade1").value);
    g1b = parseFloat(document.getElementById("a1grade2").value);
    g2a = parseFloat(document.getElementById("a2grade1").value);
    g2b = parseFloat(document.getElementById("a2grade2").value);
    g3a = parseFloat(document.getElementById("a3grade1").value);
    g3b = parseFloat(document.getElementById("a3grade2").value);
    g4a = parseFloat(document.getElementById("a4grade1").value);
    g4b = parseFloat(document.getElementById("a4grade2").value);

    if (document.getElementById("a1grade2").value==""){ g1b=0 };
    if (document.getElementById("a2grade2").value==""){ g2b=0 };
    if (document.getElementById("a3grade2").value==""){ g3b=0 };
    if (document.getElementById("a4grade2").value==""){ g4b=0 };

    f1 = g1a/g1b;
    f2 = g2a/g2b;
    f3 = g3a/g3b;
    f4 = g4a/g4b;

    if (g1b==0){ f1=0;w1=0; }
    if (g2b==0){ f2=0;w2=0; }
    if (g3b==0){ f3=0;w3=0; }
    if (g4b==0){ f4=0;w4=0; }
}
function percent()
{
    document.getElementById("%1").innerHTML = ((g1a/g1b)*100).toFixed(2) +"%";
    document.getElementById("%2").innerHTML = ((g2a/g2b)*100).toFixed(2) +"%";
    document.getElementById("%3").innerHTML = ((g3a/g3b)*100).toFixed(2) +"%";
    document.getElementById("%4").innerHTML = ((g4a/g4b)*100).toFixed(2) +"%";

    if (g1b==0){ document.getElementById("%1").innerHTML = "N/A"};
    if (g2b==0){ document.getElementById("%2").innerHTML = "N/A"};
    if (g3b==0){ document.getElementById("%3").innerHTML = "N/A"};
    if (g4b==0){ document.getElementById("%4").innerHTML = "N/A"};
}

function mean()
{
    //for mean need only grade1-a1grade2
    //no weight needed in calculation
    read();
    percent();

    document.getElementById("result").innerHTML = (((f1+f2+f3+f4)/4)*100).toFixed(2) +"/100";
}
function weight()
{
    read();
    percent();

    document.getElementById("result").innerHTML = ((((f1*w1)+(f2*w2)+(f3*w3)+(f4*w4)) / (w1+w2+w3+w4))*100).toFixed(2)+"/100";
}
