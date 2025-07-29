$(document).ready(function() {
    function e() { 
		return Math.floor(6*Math.random()+1) 
	}

    function n() {
        $("#rezultatLosowania").children().children().length>0 && $("#rezultatLosowania").children().empty();

    }
    $("#rollButton").on("click", function() { n() })
}), $(document).ready(function() {
    function e(e) { for (var n, l, t=e.length; 0!==t;) l=Math.floor(Math.random()*t), t-=1, n=e[t], e[t]=e[l], e[l]=n; return e }

    function n() {
        var n=[],
            l=[];
        $("#wynik").children().children().length>0 && $("#wynik").children().empty(), n=$("#players").val().split(/\n/);
        for (var t=0; t<n.length; t++) /\S/.test(n[t]) && l.push($.trim(n[t]));
        var a=$("#numTeams").val();
        if (l.length<3) return window.alert("Wymagane jest podanie co najmiej 3 imion do wylosowania drużyn."), void $("#players").focus();
        if (a<2 || a>l.length-1) return window.alert("Liczba drużyn musi wynosić 2 lub tyle, ile jest osób -1."), void $("#numTeams").focus();
        if (e(l), l.length%a!=0) {
            for (var r=Math.ceil(l.length/a), s=Math.floor((l.length-r)/(a-1)), i=Math.floor(l.length/r), o=a-i; i*r+o*s!=l.length;) i*r+o*s<l.length ? (i++, o--) : (i--, o++);
            for (var u=1, t=0; t<i*r; t+=r) {
                for (var m="", c=0; c<r; c++) m+=l[t+c] + "<br>";
                $("#wynik ul").append('<li><span class="teamTitle">Drużyna ' +u+ '</span><p class="names">' +m+ "</p></li>"), u++
            }
            for (var t=r*i; t<l.length; t+=s) {
                for (var m="", c=0; c<s; c++) m+=l[t+c] + "<br>";
                $("#wynik ul").append('<li><span class="teamTitle">Drużyna ' +u+ '</span><p class="names">' +m+ "</p></li>"), u++
            }
        } else
            for (var d=l.length/a, u=1, t=0; t<l.length; t+=d) {
                for (var h="", c=0; c<d; c++) h+=l[t+c] + "<br>";
                $("#wynik ul").append('<li><span class="teamTitle">Drużyna ' +u+ '</span><p class="names">' +h+ "</p></li>"), u++
            }
        $(".teamTitle").css("font-weight", "bold"), $(".names").css("margin-top", "0px"), $(".names").css("margin-left", ".5em")
    }
    $("#teamGenSubmit").on("click", function() { n() })
});
