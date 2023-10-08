let g=(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
while (1)
{
    let arr=[];
    for (let i=0;i<10;i++) arr.push(0);
    let temp=g;
    while (temp)
    {
        arr[temp%10]++;
        temp=Math.floor(temp/10);
    }
    let i=0
    for (;i<10;i++)
    {
        // console.log(arr[i],i)
        if (arr[i]>1) break;
    }
    if (i==10) break;
    else  g=(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
    // console.log(g)
}
g+=''
let arr1=[];
for (let i=0;i<10;i++) arr1.push(0);
for (let i=0;i<4;i++) arr1[g.charAt(i)-'0']++;
function check(s)
{
    let arr=[],n=0,b=0,c=0;
    for (let i=0;i<10;i++) arr.push(0);
    for (let i=0;i<4;i++)
    {
        if (s.charAt(i)==g.charAt(i)) c++;
        arr[s.charAt(i)-'0']++;
    }
    for (let i=0;i<10;i++) 
        if (arr[i]>1)
        {
            n=1;
            break;
        }
    for (let i=0;i<10;i++) b+=Math.min(arr[i],arr1[i]);
    return [`${c}C  ${b-c}B`,n];
}

function input(e)
{
    if (e.value.length==4)
    {
        let [temp,temp1]=check(e.value);
        console.log(temp);
        if (temp1)
        {
            alert("Please enter number with distinct numbers");
            e.value='';
            return 0;
        }
        document.getElementById('ressult').innerHTML=`
        <div class='row pt-2 border-bottom border-right border-left'>
        <div class='col-6 fs-4'>${e.value}</div>
        <div class='col-6 pl-5 fs-4'>${temp}</div>
      </div>`+document.getElementById('ressult').innerHTML;
        if (temp=="4C  0B")
        {
            alert("Congratulations you have guessed the number correctly!!");
            location.reload()
        }
        e.value='';
    }
}
