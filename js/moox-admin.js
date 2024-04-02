wp.domReady(function () {
    var registerPlugin = wp.plugins.registerPlugin;
    var PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;
    var __ = wp.i18n.__;

    var CustomBackLink = function () {
        return React.createElement(
            PluginMoreMenuItem,
            {
                icon: "admin-home",
                href: "http://your-filament-app.com/resources/posts",
            },
            __("Back to Filament", "text-domain")
        );
    };

    registerPlugin("custom-back-link", {
        render: CustomBackLink,
    });
});
