import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import SmartContractsIcon from "@material-ui/icons/Code";
import SimpleStorageIcon from "@material-ui/icons/Storage";
import DocumentsIcon from "@material-ui/icons/InsertDriveFile";

const AppBarList = {
	top: [
		{
			name: "fuse",
			link: "fuse",
			title: "Fuse",
			icon: DashboardIcon,
		},
		{
			name: "smartContracts",
			link: "smart-contracts",
			title: "Smart Contracts",
			icon: SmartContractsIcon,
			submenu: [
				{
					name: "simpleStorage",
					link: "simple-storage",
					title: "Simple Storage",
					icon: SimpleStorageIcon,
				},
			],
		},
		{
			name: "documents",
			link: "documents",
			title: "Documents",
			icon: DocumentsIcon,
		},
	],
	bottom: [
		{
			name: "settings",
			link: "settings",
			title: "Settings",
			icon: SettingsIcon,
		},
	],
};

export default AppBarList;
