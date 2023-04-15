const menuIcon = document.getElementById("mainmenuicon");
const iconPath = document.getElementById("iconpath");
const menu = document.getElementById("menu-list");
const menuItems = document.getElementsByClassName("menu-item");


menuIcon.onclick = function(){openMenu()};

// function to open and close the menu and switch the icon
function openMenu() {

    //if menu open --> menu close
    if (menu.style.display == "block"){


        // animation - menu items fade one by one
        for(let i=0; i<menuItems.length; i++) {
            setTimeout(function(){menuItems[i].style.opacity = "0%"}, 50*(menuItems.length - i));
        }


        setTimeout(function() {menu.style.transform = "scale(1,0)"}, 50*(menuItems.length))
        setTimeout(function() {menu.style.display = "none";}, 50*(menuItems.length +11));

        // cross icon --> menu icon
        iconPath.setAttribute("d" , 'M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z');
        

    } else {

        // else --> menu open

        menu.style.display = "block";
        menu.style.transform = "scale(1, 1)";


        // animation - menu items appear one by one
        for(let i=0; i<menuItems.length; i++) {
            setTimeout(function(){menuItems[i].style.opacity = "100%"}, 50*i);
        }
        

        //  --> cross icon
        iconPath.setAttribute("d", 'M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z')
    }
}

