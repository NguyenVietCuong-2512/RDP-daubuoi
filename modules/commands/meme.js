module.exports.config = {
  name: "meme",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Jukie¬",
  description: "Random ảnh meme",
  commandCategory: "Phương tiện",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
	var link = [

"https://i.pinimg.com/236x/29/1a/ed/291aed89807feb3bc73db8a7c763e88c.jpg",
"https://i.pinimg.com/236x/e7/e0/5f/e7e05fff969ae9510555e3c1b651dfa4.jpg",
"https://i.pinimg.com/236x/41/ac/55/41ac554c4ddab50c2c75049009116a85.jpg",
"https://i.pinimg.com/236x/33/4a/67/334a673e8652cf4790a88a3634651748.jpg",
"https://i.pinimg.com/236x/b7/18/2e/b7182ef7bf3df33d61ca82f50d242975.jpg",
"https://i.pinimg.com/236x/b2/6e/3e/b26e3ec2f31eb8177184b5334d7c6e67.jpg",
"https://i.pinimg.com/236x/30/2b/df/302bdfbd6f62be54cd6890e449d5b431.jpg",
"https://i.pinimg.com/236x/95/34/da/9534dad1e5262d951fa4514b3f02b751.jpg",
"https://i.pinimg.com/236x/fa/09/ba/fa09ba93b4767cc15036f86fd7c3d0ae.jpg",
"https://i.pinimg.com/236x/b0/c6/4e/b0c64e30a88de9f028d8574d6d7ce860.jpg",
"https://i.pinimg.com/236x/e0/dc/09/e0dc0996de107ef3519171e1473ed39c.jpg",
"https://i.pinimg.com/236x/17/bb/30/17bb30815bf9dcce48639e0426d2ce76.jpg",
"https://i.pinimg.com/236x/5d/8e/6f/5d8e6f4bf91bde81ac54e814ad47a658.jpg",
"https://i.pinimg.com/236x/a6/8b/f1/a68bf18dc1489edcb9a612ed0d1e6952.jpg",
"https://i.pinimg.com/236x/a6/88/52/a6885297462af185d7c0c30c3b6f375a.jpg",
"https://i.pinimg.com/236x/34/72/ec/3472ec09e00c9a266a2cc1e69e7c0f4a.jpg",
"https://i.pinimg.com/236x/92/94/1e/92941e2b7bdb059bff7cebc730f36fc7.jpg",
"https://i.pinimg.com/236x/b4/94/10/b494101a177133c08e3f1e8b406f06dd.jpg",
"https://i.pinimg.com/236x/45/81/cd/4581cd6ef9b8a54654c68b5c47881e23.jpg",
"https://i.pinimg.com/236x/56/20/2e/56202e516e019fe0ea17e6350227fb78.jpg",
"https://i.pinimg.com/236x/a7/cf/6c/a7cf6c3a982c91dff3a951240d8ce9f4.jpg",
"https://i.pinimg.com/236x/08/0c/12/080c1203050d1babea5c820cba8f791b.jpg",
"https://i.pinimg.com/236x/88/f3/54/88f35494109fbd435decd48b69910652.jpg",
"https://i.pinimg.com/236x/d8/cf/88/d8cf88792b7ef2b71b931408a63f6ea1.jpg",
"https://i.pinimg.com/236x/11/ee/67/11ee676a2305bab5135b12b1b3899a47.jpg",
"https://i.pinimg.com/236x/ba/98/51/ba9851b5b9692fe47a932fbeb83afe13.jpg",
"https://i.pinimg.com/236x/50/1f/fa/501ffa4d2c17c21d73d6060b07336012.jpg",
"https://i.pinimg.com/236x/e2/8c/22/e28c222dc9735d0baa7793495286312f.jpg",
"https://i.pinimg.com/236x/18/93/8d/18938d971c74dc4e6cfb89b7ff2090ec.jpg",
"https://i.pinimg.com/236x/2e/f7/d3/2ef7d35e0d7f6acbeeb6e719c68cba17.jpg",
"https://i.pinimg.com/236x/95/c5/90/95c590f9ef30f52c02139ae883a8a5fe.jpg",
"https://i.pinimg.com/236x/40/30/2c/40302c23fb7a311e8ca8cfc62333e134.jpg",
"https://i.pinimg.com/236x/be/4e/79/be4e794302023d59d33ce576042d4b96.jpg",
"https://i.pinimg.com/236x/a3/cb/a3/a3cba37a49c8fa438df818622c813e93.jpg",
"https://i.pinimg.com/236x/98/2c/52/982c52b3c5db75ef642077f361447e91.jpg",
"https://i.pinimg.com/236x/ce/a1/89/cea1897ee4a680fdad7c52b40c9cee77.jpg",
"https://i.pinimg.com/236x/fe/fc/03/fefc032eed1779926b4d22ab8912d06f.jpg",
"https://i.pinimg.com/236x/ce/83/1c/ce831c5a0d4985c99ff9233848960b10.jpg",
"https://i.pinimg.com/236x/e8/3c/5a/e83c5a67a81d5247d1257a9a0310da5b.jpg",
"https://i.pinimg.com/236x/dd/52/9a/dd529a2ec56a7e244e7634fec71731f1.jpg",
"https://i.pinimg.com/236x/b2/c2/34/b2c234f44eb7f9b24fa97016bd8937d5.jpg",
"https://i.pinimg.com/236x/ce/a1/89/cea1897ee4a680fdad7c52b40c9cee77.jpg",
"https://i.pinimg.com/236x/f2/83/3a/f2833a82c183a14743235c189e920fc2.jpg",
"https://i.pinimg.com/236x/4f/82/88/4f8288dd516092e9314030cb81231ebd.jpg",
"https://i.pinimg.com/236x/26/e7/6e/26e76edbe00ec9f2e0cbfb965330fbb6.jpg",
"https://i.pinimg.com/236x/7f/8f/9c/7f8f9c952bc943c5d68d81200258b751.jpg",
"https://i.pinimg.com/236x/b2/c2/34/b2c234f44eb7f9b24fa97016bd8937d5.jpg",
"https://i.pinimg.com/236x/3e/12/b5/3e12b5dbcfba32057d39da7f67a8f7a5.jpg",
"https://i.pinimg.com/236x/de/86/d5/de86d5b83bf998731527f5e45a93c0b0.jpg",
"https://i.pinimg.com/236x/e2/eb/c9/e2ebc9b7cad6053bcc6b38280af38870.jpg",
"https://i.pinimg.com/236x/c8/8a/b6/c88ab6df261a71be9f98961f6ddc2225.jpg",
"https://i.pinimg.com/236x/75/b4/87/75b4877ce48abbc63da94b5647f53736.jpg",
"https://i.pinimg.com/236x/4b/d2/58/4bd258c3e03147ae068d12841ace587a.jpg",
"https://i.pinimg.com/236x/ca/5e/0c/ca5e0c79c80e2e09dac30f2e70cc93e0.jpg",
"https://i.pinimg.com/236x/ea/3f/40/ea3f40dd38ca827240ddd4f5dd76fe78.jpg",
"https://i.pinimg.com/236x/52/73/77/52737774b7c5f90f464408fe00c5b1e7.jpg",
"https://i.pinimg.com/236x/b3/8e/fc/b38efcbd2fea9dab76ff64e1e0d23e3d.jpg",
"https://i.pinimg.com/236x/44/95/76/4495767bce0d5c1ef83eb2a364aa57f8.jpg",
"https://i.pinimg.com/236x/81/50/0a/81500a64914ac0a3323eef7cba7376fc.jpg",
"https://i.pinimg.com/236x/c4/16/70/c41670b1a0426533ca7023c1964e82d2.jpg",
"https://i.pinimg.com/236x/d8/88/a2/d888a283c9778effe94320a6633427e0.jpg",
"https://i.pinimg.com/236x/5c/c7/ea/5cc7ea8aa1faab5d7f21810d6550e61b.jpg",
"https://i.pinimg.com/236x/63/2a/00/632a003bdf9fee5024b5dbb7f5e7737b.jpg",
"https://i.pinimg.com/236x/81/cc/c8/81ccc8d7a8b0ee250848373aac1768df.jpg",
"https://i.pinimg.com/236x/f1/47/59/f147591d2b3f7fe4937530226f313fd1.jpg",
"https://i.pinimg.com/236x/01/79/a0/0179a0497b4bec26c3f1ab7a74267e96.jpg",
"https://i.pinimg.com/236x/a9/ac/3b/a9ac3b3bd6eb93d07c492881f0c18ff3.jpg",
"https://i.pinimg.com/236x/e7/05/68/e70568bea5036384980fcf0fa18dfbc6.jpg",
"https://i.pinimg.com/236x/6c/22/47/6c2247957e2be5f20a11829e539182ac.jpg",
"https://i.pinimg.com/236x/d3/55/67/d3556760533194bdac53bf381710f2aa.jpg",
"https://i.pinimg.com/236x/d7/b9/0f/d7b90ffb7767f1d2eafe26af08606937.jpg",
"https://i.pinimg.com/236x/4f/0e/52/4f0e52f68ca83aefaa6e7b373ded48c9.jpg",
"https://i.pinimg.com/236x/41/e1/bc/41e1bc5d776b76d53f12e9dbb80383b1.jpg",
"https://i.pinimg.com/236x/2d/5b/8f/2d5b8f2d5fb4fc19a2f8c00be10ab631.jpg",
"https://i.pinimg.com/236x/11/13/63/11136365e3209f2ea3d646957b75598d.jpg",
"https://i.pinimg.com/236x/d9/74/8e/d9748e11c66bb5e5071339bbe7bd8e8e.jpg",
"https://i.pinimg.com/236x/c9/ea/c8/c9eac8914af97deb35481d059b56a2b0.jpg",
"https://i.pinimg.com/236x/fa/9f/08/fa9f0876dba0d295aa8cea054be39b7e.jpg",
"https://i.pinimg.com/236x/be/04/fa/be04fa03f4fe07ec1de425e8868379e3.jpg",
"https://i.pinimg.com/236x/9a/ca/34/9aca3489277c9830870ed0588ee7064b.jpg",
"https://i.pinimg.com/236x/5c/45/ef/5c45ef5e8cbd8455535ba926b7aa45dd.jpg",
"https://i.pinimg.com/236x/f1/4d/92/f14d9289b03479532b5b2b70c388dc33.jpg",
"https://i.pinimg.com/236x/93/82/36/938236a3066a60ec81b7f0b40b48210b.jpg",
"https://i.pinimg.com/236x/02/3a/00/023a0006f56159a75b487324bbb424db.jpg",
"https://i.pinimg.com/236x/32/27/54/322754e3ea28832400da609f971f2971.jpg",
"https://i.pinimg.com/236x/39/2f/31/392f31d5d98cd93fc604c10ef9464201.jpg",
"https://i.pinimg.com/236x/3a/16/60/3a1660c72941a79b640db004d760c831.jpg",
"https://i.pinimg.com/236x/cc/f9/64/ccf964a495a47df84c57255d011ae8c7.jpg",
"https://i.pinimg.com/236x/5c/5e/99/5c5e99a51824a17c563df58001ce77cc.jpg",
"https://i.pinimg.com/236x/a5/15/15/a515155bb6d8d7a6e246463da0575228.jpg",
"https://i.pinimg.com/236x/f2/87/2e/f2872e356909f88505fd1a92d14fbd3d.jpg",
"https://i.pinimg.com/236x/c5/04/bc/c504bcc13483852b4258da2040e2a68b.jpg",
"https://i.pinimg.com/236x/15/67/64/156764f559eb3df4f344a6f217a46b09.jpg",
"https://i.pinimg.com/236x/e9/fe/e3/e9fee3176dd2ecf9f6c1fafceb45b4d8.jpg",
"https://i.pinimg.com/236x/cd/cb/de/cdcbde24706af9ce871c1bd4fa9414c0.jpg",
"https://i.pinimg.com/236x/fe/f8/63/fef863692cefcc6ff2ee8c39ca55047d.jpg",
"https://i.pinimg.com/236x/f2/87/2e/f2872e356909f88505fd1a92d14fbd3d.jpg",
"https://i.pinimg.com/236x/c8/ea/cf/c8eacfc612fb2b70d883bd016fa181a9.jpg",
"https://i.pinimg.com/236x/b6/23/21/b62321db4058e4ebaf2d4a9f20f33123.jpg",
"https://i.pinimg.com/236x/a3/72/1a/a3721a7427a53f8b0138f9aed44e0928.jpg",
"https://i.pinimg.com/236x/cf/83/a2/cf83a2e208a9a5bdadc87745dc3c4f20.jpg",
"https://i.pinimg.com/236x/ec/45/5b/ec455b4591652a8d16b12652a187e047.jpg",
"https://i.pinimg.com/236x/8e/3e/b8/8e3eb8f2acb389adc10f543dc055158f.jpg",
"https://i.pinimg.com/236x/c3/1b/ea/c31beac5e076c5dffab54a353cbc2997.jpg",
"https://i.pinimg.com/236x/e3/28/00/e32800c73692ee0662bf028f0e20664c.jpg",
"https://i.pinimg.com/236x/68/7f/74/687f748139a6288bd2daacb4605f265e.jpg",
"https://i.pinimg.com/236x/ce/40/7d/ce407d2cfc1214fa6e8dd29e2f7c67e1.jpg",
"https://i.pinimg.com/236x/b1/62/ea/b162ea303c627f914367dc0013df4273.jpg",
"https://i.pinimg.com/236x/bc/33/68/bc3368e6f7b3c3af6b1806e967e859f2.jpg",
"https://i.pinimg.com/236x/9c/af/b0/9cafb0b3f8ca6b290a4e60882504a85e.jpg",
"https://i.pinimg.com/236x/52/7a/db/527adbb405511402b1abde2b6cbe22e6.jpg",
"https://i.pinimg.com/236x/b0/6f/6e/b06f6ee0fcc9d5445acf20d2a5d70ca6.jpg",
"https://i.pinimg.com/236x/6c/47/76/6c47760733de09319cb8acd5565df3d7.jpg",
"https://i.pinimg.com/236x/f2/d5/45/f2d545dd1b7dd6603410de7427c013a1.jpg",
"https://i.pinimg.com/236x/82/ff/f4/82fff44db78c43cdfd271485dc4697cf.jpg",
"https://i.pinimg.com/236x/c4/3b/8e/c43b8ebbc2488614a1aefa4809bc41af.jpg",
"https://i.pinimg.com/236x/81/e3/ec/81e3ec8ab4bae34ff2e4364e12318950.jpg",
"https://i.pinimg.com/236x/1f/ea/83/1fea8378814e05a3721ef9476323625c.jpg",
"https://i.pinimg.com/236x/8d/a6/6a/8da66a3fda19cc61622bed588b0ad2de.jpg",
"https://i.pinimg.com/236x/c8/69/70/c869703b347ff931ed83187c54cc0b3a.jpg",
"https://i.pinimg.com/236x/da/df/61/dadf61af67b0f333d8746ccd8f79a92d.jpg",
"https://i.pinimg.com/236x/fb/73/8c/fb738cf9e2b2bdabfde6028298202d8f.jpg",
"https://i.pinimg.com/236x/5a/06/54/5a065463b4c8798d794d1cff22efa6bc.jpg",
"https://i.pinimg.com/236x/d3/36/61/d336614281bd9df01a24935fbe8892e9.jpg",
"https://i.pinimg.com/236x/2c/9f/51/2c9f51ff7021057c8588ce7213299097.jpg",
"https://i.pinimg.com/236x/0d/e0/d9/0de0d9fc7817513106473eb4cfd04b4c.jpg",
"https://i.pinimg.com/236x/7e/80/11/7e801184d33c5a653359279e42e2f5d5.jpg",
"https://i.pinimg.com/236x/d0/f9/ea/d0f9eabe5cc02db9b464836ce56dc4c2.jpg",
"https://i.pinimg.com/236x/c8/74/db/c874dbd17a3244619af0f8445539cec3.jpg",
"https://i.pinimg.com/236x/7c/c0/62/7cc0621fc82faa5a86e672c4d9265269.jpg",
"https://i.pinimg.com/236x/fd/47/cd/fd47cd4f6a5cf0c367b4c8e9fc360884.jpg",
"https://i.pinimg.com/236x/fb/1c/2b/fb1c2b6c5a012346ca19747c99693ec7.jpg",
"https://i.pinimg.com/236x/66/be/82/66be82f966343088448ec7511f09af7d.jpg",
"https://i.pinimg.com/236x/78/02/3c/78023cfc452afc0ec3bb6d83a2aa36c3.jpg",
"https://i.pinimg.com/236x/00/c2/06/00c2069548a6b8c5bc538d1a8bcbd021.jpg",
"https://i.pinimg.com/236x/f7/c7/e2/f7c7e2e545b7625abcee2b36ad943333.jpg",
"https://i.pinimg.com/236x/09/5a/ea/095aeabee4f29cd5e127090cf0055749.jpg",
"https://i.pinimg.com/236x/c7/c9/02/c7c90286b29d50508f339a555a32cbfd.jpg",
"https://i.pinimg.com/236x/8c/bb/24/8cbb241846149d8913f2cbff8a217f32.jpg",
"https://i.pinimg.com/236x/a7/01/8c/a7018ca3baf0b765b75f5210e7884b33.jpg",
"https://i.pinimg.com/236x/d7/92/86/d79286b5d6100a02d1e9f614fbbf0f22.jpg",
"https://i.pinimg.com/236x/d7/11/b4/d711b4762b5fbe9d68ecaaf66df8b08e.jpg",
"https://i.pinimg.com/236x/be/c9/c4/bec9c4c75618816623d81a2239784bb4.jpg",
"https://i.pinimg.com/236x/b3/59/3d/b3593d6d9d8c40ffe75d4fc0c9d82610.jpg",
"https://i.pinimg.com/236x/a2/98/f9/a298f98407445a14906ebda770d20dd1.jpg",
"https://i.pinimg.com/236x/af/4a/1c/af4a1cef3078194753aa4ca1d81e7e1d.jpg",
"https://i.pinimg.com/236x/63/96/08/639608f3993e1556c7669ddbff56dee4.jpg",
"https://i.pinimg.com/236x/19/ff/a0/19ffa0cc6199e5cf14282fff20695e4e.jpg",
"https://i.pinimg.com/236x/5e/8c/e1/5e8ce125dcf7f312ce018355fa15afb6.jpg",
"https://i.pinimg.com/236x/06/10/33/0610331d4e3aacfe01eb76b4e806610a.jpg",
"https://i.pinimg.com/236x/01/0d/ed/010ded342b6f7adde8dc147ab5e981a4.jpg",
"https://i.pinimg.com/236x/d7/f7/a7/d7f7a72fa054b29bbcca4f8cf501a0d3.jpg",
"https://i.pinimg.com/236x/97/cf/5b/97cf5b78a08ee9ef2de69a04205d234f.jpg",
"https://i.pinimg.com/236x/14/bf/c9/14bfc9f8b4f4381f2e110b0f593e43e3.jpg",
"https://i.pinimg.com/236x/f8/9b/4e/f89b4e4c9a970658a7698c69f9262cc6.jpg"
];
	 var callback = () => api.sendMessage({body:`⚡️Meme của bạn đây`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };