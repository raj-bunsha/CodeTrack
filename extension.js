const St = imports.gi.St;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Gio = imports.gi.Gio;

class DjangoServerManager {
    constructor() {
        this.button = new St.Bin({
            style_class: 'panel-button',
            reactive: true,
            can_focus: true,
            track_hover: true
        });

        let icon = new St.Icon({
            icon_name: 'system-run-symbolic',
            style_class: 'system-status-icon'
        });

        this.button.set_child(icon);
        this.button.connect('button-press-event', this._onButtonPress.bind(this));
        this.serverPid = null;
    }

    _onButtonPress() {
        if (this.button.get_child().icon_name === 'system-run-symbolic') {
            this._runServer();
            this.button.get_child().icon_name = 'system-stop-symbolic';
            Gio.AppInfo.launch_default_for_uri('http://127.0.0.1:8000', null);
        } else {
            this._stopServer();
            this.button.get_child().icon_name = 'system-run-symbolic';
        }
    }

    _runServer() {
        // Replace with the path to your manage.py file
        let path = Me.dir.get_path() + '/manage.py';
        let [success, pid] = GLib.spawn_async(null, ['python', path, 'runserver'], null, GLib.SpawnFlags.SEARCH_PATH | GLib.SpawnFlags.DO_NOT_REAP_CHILD, null);
        if (success) {
            this.serverPid = pid;
        }
    }

    _stopServer() {
        if (this.serverPid) {
            GLib.spawn_command_line_async('kill ' + this.serverPid);
            this.serverPid = null;
        }
    }

    enable() {
        Main.panel._rightBox.insert_child_at_index(this.button, 0);
        this.button.get_child().icon_name = 'system-run-symbolic';
    }

    disable() {
        Main.panel._rightBox.remove_child(this.button);
    }
}

let serverManager;

function init() {
    serverManager = new DjangoServerManager();
}

function enable() {
    serverManager.enable();
}

function disable() {
    serverManager.disable();
}
