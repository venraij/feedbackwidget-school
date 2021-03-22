class FeedbackWidget{
    constructor(elementId) {
        this._elementId = elementId;
    }
    get elementId() { //getter, set keyword voor setter methode
        return this._elementId;
    }
    show(message, type) {
        const x = document.getElementById(this.elementId);
        x.style.display = "block";
        $(`#${this.elementId}`).text(message);

        if (type === "success") {
            $(`#${this.elementId}`).addClass("alert-success");
        } else {
            $(`#${this.elementId}`).addClass("alert-danger");
        }

        this.log({ message: message, type: type});
    }

    hide() {
        const x = document.getElementById(this.elementId);

        $(`#${this.elementId}`).removeClass("alert-danger");
        $(`#${this.elementId}`).removeClass("alert-success");

        x.style.display = "none";
    }

    log(message) {
        if (localStorage.getItem('feedback_widget') === null) {
            localStorage.setItem('feedback_widget', JSON.stringify([message]))
        }
        const storageArray = JSON.parse(localStorage.getItem('feedback_widget'));
        storageArray[storageArray.length] = message;
        localStorage.setItem('feedback_widget', JSON.stringify(storageArray));
    }

    removeLog() {
        localStorage.removeItem('feedback_widget');
    }

    history() {
        const log = JSON.parse(localStorage.getItem('feedback_widget'));
        let string = '';

        log.forEach(item => {
            if (item === log[log.length - 1]) {
                string += `<${item.type}> ${item.message}`;
            } else {
                string += `<${item.type}> ${item.message} <\n>`;
            }
        })

        this.show(string);
    }
}


