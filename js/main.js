const profielkenmerken = {
    EmailAdress: "302888209@student.rocmondriaan.nl",
    userName: "YassineRocdev",
    birthDate: "22-12-2004",
    profilePhoto: "hier komt mijn profielfoto",
    biografie: "i live in the netherlands and i am 18 years old",
    projects: "hoger lager boter kaas en eiren",
    opleidingen: "software developer",
    vaardingheden: "goed in rekenen goed in engels basic coding skills",
    bannerkleur: "blue",
    socialmedias: "instagram and twitter"

};

for (key in profielkenmerken) {
    console.log('----------');
    console.log(key + ': ' + profielkenmerken[key]);
}

// console.log(
//     "klaar met opdracht 2"
// );