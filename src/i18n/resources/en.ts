import { LanguageResource } from "../type";

export const en: LanguageResource = {
  header: {
    login: "Login",
    logout: "Logout",
    docs: "Docs",
    networks: "Networks",
    nodes: "Nodes",
    accessKeys: "Access Keys",
    dns: "DNS",
    externalClients: "External clients",
    users: "Users",
  },
  breadcrumbs: {
    home: "Home",
    networks: "Networks",
    nodes: "Nodes",
    edit: "Edit",
  },
  common: {
    disabled: "Disabled",
    notFound: "Not found",
    server: "Server",
    version: "Version",
    delete: "Delete",
    cancel: "Cancel",
    save: "Save",
    submit: "Submit",
    reset: "Reset",
    edit: "Edit",
  },
  network: {
    networks: "Network",
    addressrange: "Address Range (IPv4)",
    addressrange6: "Address Range (IPv6)",
    localrange: "Local Range",
    displayname: "Display Name",
    nodeslastmodified: "Nodes Last Modified",
    networklastmodified: "Network Last Modified",
    defaultinterface: "Default Interface",
    defaultlistenport: "Default Listen Port",
    defaultpostup: "Default Postup",
    defaultpostdown: "Default Postdown",
    defaultkeepalive: "Default KeepAlive",
    checkininterval: "Default Checkin Interval",
    defaultextclientdns: "Default Ext Client DNS",
    defaultmtu: "Default MTU",
    isdualstack: "Is Dual Stack (IPv4 + IPv6)",
    defaultsaveconfig: "Default Saveconfig",
    accesskeys: "Access Keys",
    defaultudpholepunch: "Default UDP Hole Punch",
  },
  node: {
    nodes: "Nodes",
    id: "Id",
    accesskey: "Access Key",
    lastpeerupdate: "Last Peer Update",
    keyupdatetimestamp: "Key Update",
    checkininterval: "Checkin Interval",
    ispending: "Is Pending",
    action: "Action",
    localrange: "Local Range",
    isingressgateway: "Is Ingress Gateway",
    isegressgateway: "Is Egress Gateway",
    pullchanges: "Pull Changes",
    dnson: "Is DNS on",
    isdualstack: "Dualstack",
    ipforwarding: "Ipforwarding",
    roaming: "Roaming",
    islocal: "Is Local",
    isserver: "Is Server",
    ingressgatewayrange: "Ingress Gateway Ranges (Comma Separated)",
    address: "IP Address",
    address6: "IPv6 Address",
    name: "Node Name",
    listenport: "Listen Port",
    publickey: "Publickey",
    endpoint: "Endpoint",
    expdatetime: "Node Expiration Date/Time",
    postup: "Postup",
    postdown: "Postdown",
    persistentkeepalive: "Persistent Keepalive",
    saveconfig: "Saveconfig",
    interface: "Interface",
    lastmodified: "Last Modified",
    lastcheckin: "Last Checkin",
    macaddress: "Mac Address",
    network: "Network",
    localaddress: "Local Address",
    egressgatewayranges: "Egress Gateway Ranges (Comma Separated)",
    allowedips: "Allowed IPs (Comma Separated)",
    udpholepunch: "UDP Hole Punching",
    isstatic: "Is Static",
    mtu: "MTU",
    relayaddrs: "Relay Addresses (Comma Separated)",
    os: "Node Operating System",
  },
  login: {
    validation: {
      username: 'Invalid user name provided. Must be between 3 to 40 alphanumeric characters with "-" or "." or an email address.',
      password: "Invalid password provided. Must be between 5 to 64 characters with no white space."
    },
    label: {
      username: "Username",
      password: "Password"
    },
    header: "Login below:",
    login: "Login",
    loginFailed: "Failed to login, wrong username or password."
  }
};
