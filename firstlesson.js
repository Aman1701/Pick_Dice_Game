                       //Unit 2

// var firstName = "Aman";
// var lastName = "Kumar";
// var age = 20;
// var fullAge = true;
// var job;
// var passion = prompt('what is your passion?');
// console.log(firstName + " "+ lastName + " loves" +passion);
// var johnHeight = 6, johnMass = 54, johnBmi = johnMass/(johnHeight^2);
// var markHeight = 5.5, markMass = 60, markBmi = markMass/(markHeight^2);
// if(johnBmi > markBmi)
// {
//     console.log("John is better than mark");
// }
// else{
//     console.log("Mark is better than John");
// }

// var johnScore = [89,120,103];
// var mikeScore = [116,94,133];
// var maryScore = [97,134,105];
// var johnSum=0;
// var mikeSum=0;
// var marySum=0;
// for(var i=0;i<3;i++)
// {
//    johnSum = johnSum + johnScore[i];
//    mikeSum = mikeSum + mikeScore[i];
//    marySum = marySum + maryScore[i];
// }
// var johnavg = johnSum/johnScore.length;
// var mikeavg = mikeSum/mikeScore.length;
// var maryavg = marySum/maryScore.length;  

// console.log(johnavg);
// console.log(mikeavg);
// console.log(maryavg);


// if(johnavg > mikeavg  && johnavg > maryavg)
// {
//     console.log("John wins");
// }
// else if (mikeavg > johnavg && mikeavg > maryavg)
// {
//     console.log("Mike wins");
// }
// else{
//     console.log("Mary wins");
// }

// function calculateAge(birthYear)
// {
//     return 2020-birthYear;
// }

// var myAge = calculateAge(2000);
// console.log(myAge);


//function declaration
// function calculateRetire(Year, firstName)
// {
//     var age = calculateAge(Year);
//     var retirement = 65-age;
//     console.log(retirement + firstName);
// }


// function expression
// var wdyd = function(job, firstName){
//     switch(job)
//     {
//         case 'teacher':
//             {
//                 return firstName+" teaches kids coding";
//             }
//         case 'driver' : 
//         {
//             return firstName+" drives a car";
//         }
//         case 'designer' :
//             {
//                 return firstName+" designs a website";
//             }
//     }
// }
// console.log(wdyd('teacher', 'Aman kumar'));

// var collection = ["Name", 20, "Bihar"];
// var years = new Array(1990, 1969, 1948);
// years.push(2001);
// console.log(years);
// for(var i=0; i<years.length;i++)
// {
//     console.log(collection[i]);
//     console.log(years[i]);
// }

// var bills = [128, 48, 268];

// var tips = [];
// var totalbills = [];
// for(var i=0; i<bills.length; i++)
// {
//     var returntip = tipCalculator(bills[i]);
//     tips.push(returntip);
//     totalbills[i] = bills[i]+tips[i];
// }
// function tipCalculator (bill)
// {
//     var tip=0;
//     if(bill < 50)
//     {
//         tip = tip+ bill*0.2;

//     }
//     else if(bill >=50 && bill <200)
//     {
//         tip = tip + bill*0.15;
//     }
//     else if(bill>200)
//     {
//         tip = tip + bill * 0.1;
//     }
//     return tip;
// }

// console.log(tips);
// console.log(totalbills);


// var john = {
//     firstName : 'john',
//     lastName : 'smith',
//     birthYear : 1990,
//     family : ['Anto', 'Jame', 'Bob'],
//     calcAge : function() {
//         this.age =  2020-this.birthYear;
//     }
// };

// john.job='teacher';
// john.calcAge();

// console.log(john);

// var john = {
//     name : "John Smith",
//     mass : 55,
//     height : 6,
//     bmicalc : function()
//     {
//         this.bmi = this.mass / (this.height ^2);
//     }
// };

// var mark = {
//     name : "Mark White",
//     mass : 56,
//     height : 5.5,
//     bmicalc : function()
//     {
//         this.bmi = this.mass / (this.height ^2);
//     }
// };

// john.bmicalc();
// mark.bmicalc();
// console.log(john.bmi);
// console.log(mark.bmi);

//  function check(johnbmi, markbmi)
// {
//     if(johnbmi> markbmi)
//     {
//         console.log("john is better");
//     }
//     else
//     {
//         console.log("Mark is better");
//     }
// }

// console.log(check(john.bmi, mark.bmi));

var john = {
    bills : [124, 48, 268, 180, 42],
    tips :[],
    totalbill : [],
    tipcalc : function()
    {
        for(var i=0; i<this.bills.length; i++)
        {
            if(this.bills[i] < 50)
            {
                this.tips[i] = this.bills[i] * 0.2;
                this.totalbill[i] = this.tips[i]+ this.bills[i];
            }
            else if(this.bills[i] >=50 && this.bills[i]<200)
            {
                this.tips[i] = this.bills[i] * 0.15;
                this.totalbill[i] = this.tips[i]+ this.bills[i];

            }
            else if(this.bills[i] >= 200)
            {
                this.tips[i] = this.bills[i] * 0.1;
                this.totalbill[i] = this.tips[i]+ this.bills[i];
            }
        }
    }
};

var mark = {
    bills : [77, 375, 110, 45],
    tips : [],
    totalbill : [],
    billcalc : function()
    {
        for(var i=0; i< this.bills.length; i++)
        {
            if(this.bills[i] < 50)
            {
                this.tips[i] = this.bills[i] * 0.2;
                this.totalbill[i] = this.tips[i]+ this.bills[i];
            }
            else if(this.bills[i] >=50 && this.bills[i]<200)
            {
                this.tips[i] = this.bills[i] * 0.15;
                this.totalbill[i] = this.tips[i]+ this.bills[i];

            }
            else if(this.bills[i] >= 200)
            {
                this.tips[i] = this.bills[i] * 0.1;
                this.totalbill[i] = this.tips[i]+ this.bills[i];
            }
        }
    }
}
var johnsum = 0;
var marksum =0;
var johnavg = 0;
var markavg = 0;

function tipaverage (johntip, marktip)
{
    
    for(var i=0; i<johntip.length; i++)
    {
        johnsum=johnsum + johntip[i];
    }
    johnavg = johnsum/ johntip.length;
    for(var i=0; i<marktip.length; i++)
    {
        marksum = marksum +marktip[i];
    }
    markavg = marksum/marktip.length;
}



john.tipcalc();
mark.billcalc();
console.log(john.tips);
console.log(john.totalbill);
console.log(mark.tips);
console.log(mark.totalbill);
tipaverage(john.tips, mark.tips);
console.log(johnavg);
console.log(markavg);

if(johnavg > markavg)
{
    console.log("john paid more tip");
}
else{
    console.log("mark paid more tip");
}
