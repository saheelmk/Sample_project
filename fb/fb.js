$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
            
            },
            mobileNum:{
                required:true,
                number: true

            },
            password:{
                required:true,
                maxlenght:8
            },
            Days:{
                required:true,

            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            Gender:{
                required:true
            }
        },
        messages:{
            fname:{
            required:"Enter first name",
            minlength:"Enter atleast 4 characters"      
        },
        sname:{
            required:"Enter surname",
        },
        mobileNum:{
            required:"Enter mobile Number",
        },
        password:{
            required:"Enter the password",
        },
        Days:{
            required:"select your day",
        },

        }
    })
})