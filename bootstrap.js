/*
 * delete-cookies-on-exit - Deletes all cookies when closing the browser
 * Copyright (C) 2012 Alexandre Erwin Ittner <alexandre@ittner.com.br>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


function install(data, reason) {
}

function uninstall(data, reason) {
}

function startup(data, reason) {
}

function shutdown(data, reason) {
    if (reason == APP_SHUTDOWN)
        Components.classes["@mozilla.org/cookiemanager;1"]
            .getService(Components.interfaces.nsICookieManager).removeAll(); 
}
