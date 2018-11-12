$(document).ready(function() {

    // MENU LATERAL------------------------------------------------------------------------------------------
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });
    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        var elem = document.getElementById("sidebar-wrapper");
        left = window.getComputedStyle(elem,null).getPropertyValue("left");
        if(left == "-200px"){
            document.getElementsByClassName("sidebar-toggle")[0].style.left="200px";
        }
        else if(left == "200px"){
            document.getElementsByClassName("sidebar-toggle")[0].style.left="-200px";
        }
    });
    // -------------------------------------------------------------------------------------------------------
});


function closeModal(modal) {    
    location.reload();
}

function excluirCard(idcandidato){

    var r = confirm("Deseja excluir esse candidato?");

    if(r == true){

      var idRemover = 'http://andrebordignon.esy.es/php/deletacandidato.php?idcandidato='+ idcandidato;
          $.ajax({
            url: idRemover,
              success:function(data){
                alert(data);
                  location.reload();
              },
              error: function(data){
                alert(data);
              }   
          });
    }
}