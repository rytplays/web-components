class dialog
{

    constructor()
    {
        var modalParent = document.createElement('div');
        modalParent.setAttribute('class','modal');

        var modalDialog = document.createElement('div');
        modalDialog.setAttribute('class','modal-dialog');


        this.spinner = '<div class="d-flex justify-content-center">\
        <div class="spinner-border" role="status">\
            <span class="visually-hidden">Loading...</span>\
        </div>\
        </div>';

        var modalSpinner = this.modalSpinner = document.createElement('div');
        modalSpinner.setAttribute('class','modal-content p-3 text-center');
        modalSpinner.innerHTML = this.spinner;
        

        

        var modalContent = this.modalContent =document.createElement('div');
        modalContent.setAttribute('class','modal-content');

        var header = this.header = document.createElement('div');
        header.setAttribute('class','modal-header');

        var body = this.body = document.createElement('div');
        body.setAttribute('class','modal-body');

        var footer = this.footer = document.createElement('div');
        footer.setAttribute('class','modal-footer');

        var btn2 = this.btn2 = document.createElement('button');
        var btn1 = this.btn1 = document.createElement('button');

        footer.appendChild(btn2);
        footer.appendChild(btn1);

        modalContent.appendChild(header);
        modalContent.appendChild(body);
        modalContent.appendChild(footer);

        modalDialog.appendChild(modalSpinner);
        modalDialog.appendChild(modalContent);
        modalParent.appendChild(modalDialog);


        var modal = new bootstrap.Modal(modalParent, {
            keyboard: false,
            backdrop: 'static'
        });
        this.modal = modal;
    }

    show()
    {
        this.modalSpinner.style.display = "none";
        this.modalContent.style.display = "block";
        this.modal.show();
    }

    loading(text = this.spinner)
    {
        this.modalSpinner.style.display = "block";
        this.modalContent.style.display = "none";
        this.modalSpinner.innerHTML = text;
        this.modal.show();
    }

    hide()
    {
        this.modal.hide();
    }

    setContent(title,message)
    {
        this.header.innerHTML = title;
        this.body.innerHTML = message;
    }

    setBtn1(text = '',className = 'd-none',onclick = onclick = null)
    {
        this.btn1.setAttribute("class",className);
        this.btn1.onclick = onclick;
        this.btn1.innerHTML = text;
    }

    setBtn2(text = '',className = 'd-none',onclick = null)
    {
        this.btn2.setAttribute("class",className);
        this.btn2.onclick = onclick;
        this.btn2.innerHTML = text;
    }


}
