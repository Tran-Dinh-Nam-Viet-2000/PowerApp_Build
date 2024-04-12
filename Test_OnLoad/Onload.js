this.formOnLoad = function(executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification("Hello power app 1", "WARNING", "IDUnique220912");
    if (formContext.getAttribute("fax").getValue() == null) {
        formContext.getAttribute("fax").setValue("123-611-038");
    }
    if (formContext.getAttribute("telephone1").getValue() != null) {
        formContext.getAttribute("telephone1").setValue("0905611038");
    }
    if (formContext.getAttribute("websiteurl").getValue() == null) {
        formContext.getAttribute("websiteurl").setValue("https://translate.google.com/");
    }
}