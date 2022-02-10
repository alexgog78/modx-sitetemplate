define([
    'abstractWidget',
], function () {
    'use strict';

    $.widget('widgets.accordion', $.widgets.abstract, {
        options: {
            section: '[data-accordion="section"]',
            header: '[data-accordion="header"]',
            content: '[data-accordion="content"]',
            openClass: 'open',
            hiddenClass: 'hidden',
            open: [],
            onlyOne: true,
        },

        _run: function () {
            let $openedByDefault = this.element.find(this.options.section).filter(this.openedByDefault.bind(this));
            if ($openedByDefault.length > 0) {
                this.openSection($openedByDefault);
            }
            this.element.on('click.accordion', this.options.header, this.toggleSection.bind(this));
        },

        _destroy: function () {
            this.element.unbind('click.accordion');
            let $sections = this.element.find(this.options.section);
            if ($sections.length > 0) {
                this.openSection($sections);
            }
        },

        openedByDefault: function (i) {
            return $.inArray(i, this.options.open) !== -1;
        },

        toggleSection: function (e) {
            e.preventDefault();
            let $currentSection = $(e.target).parents(this.options.section);
            let state = $currentSection.data('accordion-state');
            if (state === 1) {
                this.closeSection($currentSection);
            } else {
                this.openSection($currentSection);
            }
        },

        openSection: function ($section) {
            $section
                .removeClass(this.options.hiddenClass)
                .addClass(this.options.openClass)
                .find(this.options.content).css('display', 'none')
                .stop(true, true)
                .slideDown({
                    done: () => {
                        $section.data('accordion-state', 1);
                    }
                });

            if (this.options.onlyOne) {
                let $sections = this.element.find(this.options.section).not($section);
                if ($sections.length > 0) {
                    this.closeSection($sections);
                }
            }
        },

        closeSection: function ($section) {
            $section
                .find(this.options.content)
                .stop(true, true)
                .slideUp({
                    done: () => {
                        $section.addClass(this.options.hiddenClass);
                        $section.removeClass(this.options.openClass);
                        $section.data('accordion-state', 0);
                    }
                });
        },
    });
});
