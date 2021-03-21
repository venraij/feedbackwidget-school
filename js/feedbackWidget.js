class FeedbackWidget{
    constructor(elementId) {
        this._elementId = elementId;
    }
    get elementId() { //getter, set keyword voor setter methode
        return this._elementId;
    }
    show(elementId, message, type) {
        const x = document.getElementById(elementId);
        x.style.display = "block";
        $(`#${elementId} p`).text(message);

        if (type === "success") {
            $(`#${elementId}`).addClass("alert-success");
        } else {
            $(`#${elementId}`).addClass("alert-danger");
        }
    }

    hide(elementId) {
        const x = document.getElementById(elementId);
        x.style.display = "none";
    }
}


