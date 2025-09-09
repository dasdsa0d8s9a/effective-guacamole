const params = new URLSearchParams(location.hash.slice(1));
params.get("tab");      // "profile"
params.set("view","list");
location.hash = params.toString();
