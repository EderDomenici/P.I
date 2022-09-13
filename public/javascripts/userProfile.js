
$(function () {
    $(".edit").dblclick(function () {
        const originalContent = $(this).text();

        $(this).addClass("editTable");
        $(this).html(`<input class='edit' type='text' value='${originalContent}' />`);
        $(this).children().first().focus();

        $(this).children().first().keypress(function (e) {
            if (e.which == 13) {
                const newContent = $(this).val();
                $(this).parent().text(newContent);
                $(this).parent().removeClass("editTable");
            }
        });

	$(this).children().first().blur(function(){
		$(this).parent().text(originalContent);
		$(this).parent().removeClass("editTable");
	});
    });
});
