
let v1;
let v2;
      function active()
        {
            v1 = 250;
            v2 = 250;
            document.getElementById('menu').style.width =  v1 + 'px';
            document.getElementById('content').style.marginLeft = v2 + 'px';
        }
        function deactivate()
        {
            if( v1 === 250 && v2 === 250){
                --v1;
                --v2;
                if(v1 === 0 && v2 === 0){
                    document.getElementById('menu').style.width = v1 +"px";
                    document.getElementById('content').style.marginLeft = v2 +"px";
                }
            }
        }