function CountUp(initDate, id){
    this.beginDate = new Date(initDate);
    this.countainer = document.getElementById(id);
    this.numOfDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    this.borrowed = 0, this.years = 0, this.months = 0, this.days = 0;
    this.hours = 0, this.minutes = 0, this.seconds = 0;
    this.updateNumOfDays();
    this.updateCounter();
}

function CountUp2(initDate, id){
    this.beginDate = new Date(initDate);
    this.countainer = document.getElementById(id);
    this.numOfDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    this.borrowed = 0, this.years = 0, this.months = 0, this.days = 0;
    this.hours = 0, this.minutes = 0, this.seconds = 0;
    this.updateNumOfDays();
    this.updateCounter();
}

function CountUp3(initDate, id){
    this.beginDate = new Date(initDate);
    this.countainer = document.getElementById(id);
    this.numOfDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    this.borrowed = 0, this.years = 0, this.months = 0, this.days = 0;
    this.hours = 0, this.minutes = 0, this.seconds = 0;
    this.updateNumOfDays();
    this.updateCounter();
}
  
CountUp.prototype.updateNumOfDays=function(){
    var dateNow = new Date();
    var currYear = dateNow.getFullYear();
    if ( (currYear % 4 == 0 && currYear % 100 != 0 ) || currYear % 400 == 0 ) {
        this.numOfDays[1] = 29;
    }
    var self = this;
    setTimeout(function(){self.updateNumOfDays();}, (new Date((currYear+1), 1, 2) - dateNow));
}

CountUp2.prototype.updateNumOfDays=function(){
    var dateNow = new Date();
    var currYear = dateNow.getFullYear();
    if ( (currYear % 4 == 0 && currYear % 100 != 0 ) || currYear % 400 == 0 ) {
        this.numOfDays[1] = 29;
    }
    var self = this;
    setTimeout(function(){self.updateNumOfDays();}, (new Date((currYear+1), 1, 2) - dateNow));
}

CountUp3.prototype.updateNumOfDays=function(){
    var dateNow = new Date();
    var currYear = dateNow.getFullYear();
    if ( (currYear % 4 == 0 && currYear % 100 != 0 ) || currYear % 400 == 0 ) {
        this.numOfDays[1] = 29;
    }
    var self = this;
    setTimeout(function(){self.updateNumOfDays();}, (new Date((currYear+1), 1, 2) - dateNow));
}
  
CountUp.prototype.datePartDiff=function(then, now, MAX){
    var diff = now - then - this.borrowed;
    this.borrowed = 0;
    if ( diff > -1 ) return diff;
    this.borrowed = 1;
    return (MAX + diff);
}

CountUp2.prototype.datePartDiff=function(then, now, MAX){
    var diff = now - then - this.borrowed;
    this.borrowed = 0;
    if ( diff > -1 ) return diff;
    this.borrowed = 1;
    return (MAX + diff);
}

CountUp3.prototype.datePartDiff=function(then, now, MAX){
    var diff = now - then - this.borrowed;
    this.borrowed = 0;
    if ( diff > -1 ) return diff;
    this.borrowed = 1;
    return (MAX + diff);
}
  
CountUp.prototype.calculate=function(){
    var currDate = new Date();
    var prevDate = this.beginDate;
    this.seconds = this.datePartDiff(prevDate.getSeconds(), currDate.getSeconds(), 60);
    this.minutes = this.datePartDiff(prevDate.getMinutes(), currDate.getMinutes(), 60);
    this.hours = this.datePartDiff(prevDate.getHours(), currDate.getHours(), 24);
    this.days = this.datePartDiff(prevDate.getDate(), currDate.getDate(), this.numOfDays[currDate.getMonth()]);
    this.months = this.datePartDiff(prevDate.getMonth(), currDate.getMonth(), 12);
    this.years = this.datePartDiff(prevDate.getFullYear(), currDate.getFullYear(),0);
}

CountUp2.prototype.calculate=function(){
    var currDate = new Date();
    var prevDate = this.beginDate;
    this.seconds = this.datePartDiff(prevDate.getSeconds(), currDate.getSeconds(), 60);
    this.minutes = this.datePartDiff(prevDate.getMinutes(), currDate.getMinutes(), 60);
    this.hours = this.datePartDiff(prevDate.getHours(), currDate.getHours(), 24);
    this.days = this.datePartDiff(prevDate.getDate(), currDate.getDate(), this.numOfDays[currDate.getMonth()]);
    this.months = this.datePartDiff(prevDate.getMonth(), currDate.getMonth(), 12);
    this.years = this.datePartDiff(prevDate.getFullYear(), currDate.getFullYear(),0);
}

CountUp3.prototype.calculate=function(){
    var currDate = new Date();
    var prevDate = this.beginDate;
    this.seconds = this.datePartDiff(prevDate.getSeconds(), currDate.getSeconds(), 60);
    this.minutes = this.datePartDiff(prevDate.getMinutes(), currDate.getMinutes(), 60);
    this.hours = this.datePartDiff(prevDate.getHours(), currDate.getHours(), 24);
    this.days = this.datePartDiff(prevDate.getDate(), currDate.getDate(), this.numOfDays[currDate.getMonth()]);
    this.months = this.datePartDiff(prevDate.getMonth(), currDate.getMonth(), 12);
    this.years = this.datePartDiff(prevDate.getFullYear(), currDate.getFullYear(),0);
}
  
CountUp.prototype.addLeadingZero=function(value){
    return value < 10 ? ("0" + value) : value;
}

CountUp2.prototype.addLeadingZero=function(value){
    return value < 10 ? ("0" + value) : value;
}

CountUp3.prototype.addLeadingZero=function(value){
    return value < 10 ? ("0" + value) : value;
}
  
CountUp.prototype.formatTime=function(){
    this.seconds = this.addLeadingZero(this.seconds);
    this.minutes = this.addLeadingZero(this.minutes);
    this.hours = this.addLeadingZero(this.hours);
}

CountUp2.prototype.formatTime=function(){
    this.seconds = this.addLeadingZero(this.seconds);
    this.minutes = this.addLeadingZero(this.minutes);
    this.hours = this.addLeadingZero(this.hours);
}

CountUp3.prototype.formatTime=function(){
    this.seconds = this.addLeadingZero(this.seconds);
    this.minutes = this.addLeadingZero(this.minutes);
    this.hours = this.addLeadingZero(this.hours);
}
 
CountUp.prototype.updateCounter=function(){
    this.calculate();
    this.formatTime();
  this.countainer.innerHTML = 
      "Tanıştığımız günden bugüne kadar <span>" + this.years + " " + (this.years == 1? "yıl, " : "yıl, ") + "</span>" + 
      "<span>" + this.months + " " + (this.months == 1? "ay, " : "ay, ") + "</span>" + 
      "<span>" + this.days + " " + (this.days == 1? "gün, " : "gün, ") + "</span>" + 
      "<span>" + this.hours + " " + (this.hours == 1? "saat, " : "saat, ") + "</span>" + 
      "<span>" + this.minutes + " " + (this.minutes == 1? "dakika, " : "dakika, ") + "</span>" + 
      "<span>" + this.seconds + " " + (this.seconds == 1? "saniye" : "saniye") + "</span> geçmiş.";
    var self = this;
    setTimeout(function(){self.updateCounter();}, 1000);
}

CountUp2.prototype.updateCounter=function(){
    this.calculate();
    this.formatTime();
  this.countainer.innerHTML = 
      "Sevgili olduğumuz günden bugüne kadar <span>" + this.years + " " + (this.years == 1? "yıl, " : "yıl, ") + "</span>" + 
      "<span>" + this.months + " " + (this.months == 1? "ay, " : "ay, ") + "</span>" + 
      "<span>" + this.days + " " + (this.days == 1? "gün, " : "gün, ") + "</span>" + 
      "<span>" + this.hours + " " + (this.hours == 1? "saat, " : "saat, ") + "</span>" + 
      "<span>" + this.minutes + " " + (this.minutes == 1? "dakika, " : "dakika, ") + "</span>" + 
      "<span>" + this.seconds + " " + (this.seconds == 1? "saniye" : "saniye") + "</span> geçmiş.";
    var self = this;
    setTimeout(function(){self.updateCounter();}, 1000);
}

CountUp3.prototype.updateCounter=function(){
    this.calculate();
    this.formatTime();
  this.countainer.innerHTML = 
      "Söz verdiğimiz günden bugüne kadar <span>" + this.years + " " + (this.years == 1? "yıl, " : "yıl, ") + "</span>" + 
      "<span>" + this.months + " " + (this.months == 1? "ay, " : "ay, ") + "</span>" + 
      "<span>" + this.days + " " + (this.days == 1? "gün, " : "gün, ") + "</span>" + 
      "<span>" + this.hours + " " + (this.hours == 1? "saat, " : "saat, ") + "</span>" + 
      "<span>" + this.minutes + " " + (this.minutes == 1? "dakika, " : "dakika, ") + "</span>" + 
      "<span>" + this.seconds + " " + (this.seconds == 1? "saniye" : "saniye") + "</span> geçmiş.";
    var self = this;
    setTimeout(function(){self.updateCounter();}, 1000);
}

window.onload = function() {
	new CountUp("May 7, 2019 00:00:00", 'tanismatarihi');
	new CountUp2("June 20, 2019 00:00:00", 'sevgiliolmatarihi');
	new CountUp3("August 20, 2020 00:00:00", 'soztarihi');
};