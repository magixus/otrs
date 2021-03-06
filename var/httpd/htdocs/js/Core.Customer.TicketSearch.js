// --
// Copyright (C) 2001-2018 OTRS AG, http://otrs.com/
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (AGPL). If you
// did not receive this file, see http://www.gnu.org/licenses/agpl.txt.
// --

"use strict";

var Core = Core || {};
Core.Customer = Core.Customer || {};

/**
 * @namespace Core.Customer.TicketSearch
 * @memberof Core.Customer
 * @author OTRS AG
 * @description
 *      This namespace contains special module function for CustomerTicketSeach.
 */
Core.Customer.TicketSearch = (function (TargetNS) {

    /**
     * @name Init
     * @memberof Core.Customer.TicketSearch
     * @function
     * @description
     *      This function initializes the module functionality.
     */
    TargetNS.Init = function(){
        $('form').on('submit', function() {
            if ($('#ResultForm').val() === 'Print') {
                $('form').attr('target', '_blank');
            }
            else {
                $('form').removeAttr('target');
            }
        });
    };

    Core.Init.RegisterNamespace(TargetNS, 'APP_MODULE');

    return TargetNS;
}(Core.Customer.TicketSearch || {}));
