module.exports.config = {
  name: "animeid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DMH",
  description: "Thông tin ID về nhân vật anime",
  commandCategory: "Phương tiện",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
 "https://i.imgur.com/XE0g8PG.jpg",
 "https://i.imgur.com/0oV83Pe.jpg",
  ];
  var callback = () => api.sendMessage({body:`Danh sách ID nhân vật Anime
ace: 197
ai ohto: 20
ainz ooal gown: 43
akaza: 57
albedo: 116
amajiki: 138
anos: 125
aqua: 35
asta: 131
asuma: 230
asuna: 174
ayaka: 29
baji: 66
bakugou: 177
bakura ryou: 91
black goku: 235
brandish: 167
chaheain: 184
cherry: 130
chifuyu: 64
chitanda eru: 183
dabi: 142
darkness: 37
dazai: 139
deidara: 213
dimaria yesta: 137
dio: 185
doflamingo: 199
doraemon: 118
draken: 62
elaina: 102
emilia: 11
emma: 61
eren: 159
erza: 165
fischl: 24
fubuki: 107
gaara: 223
gajeel: 172
ganyu: 26
gilgamesh: 78
gin: 126
gintoki: 16
giorno giovanna: 187
giyuu: 51
gohan: 234
gray: 164
gura: 176
hair black: 135
haitani ran: 67
haitani rindou: 68
hanako: 31
hanji zoe: 161
hanma: 72
hashirama: 224
hidan: 215
hina: 59
hinata hyuga: 229
hinata: 152
hiroomi: 122
hy tomboy: 0
ichigo: 111
imaushi: 73
inosuke: 48
inuyasha: 94
iruma: 98
itachi: 214
izana kurokawa: 70
izumi sagiri: 117
jean: 25
jinmori: 144
jotaro: 186
juuzou: 8
kageyama tobio: 153
kaguya: 42
kaiba: 80
kaito kid: 193
kakashi: 205
kakuzu: 212
kaneki ken: 7
kanna: 188
kaori: 175
karma: 74
kawaragi senju: 69
kazutora: 71
kenma: 123
keqing: 23
killua zoldyck: 30
kirito: 173
kisaki: 63
kisame: 216
kisame: 216
kiyotaka ayanokōji: 93
kokushibou: 50
konan: 210
koro sensei: 14
kotori: 76
kuroko: 143
kurumi: 41
kushina: 221
kyaru: 38
l lawlie: 145
langa: 141
laxus: 169
levi: 158
lisa: 22
loli: 189
luck voltia: 132
lucy: 163
luffy: 194
luna: 149
madara: 225
mahito: 84
mai: 121
makomo: 55
marik ishtar: 92
megumi: 83
megumin: 36
midoriya: 133
mikasa: 160
mikey: 60
miku: 39
milim: 44
minato: 222
mirai: 103
mirajane: 166
misaki taro: 181
mitsuha: 237
mitsuya: 65
mizuhara chizuru: 3
mona: 21
monika: 99
muichirou: 53
nagato: 209
nagisa: 75
nakano ichika: 86
nakano itsuki: 90
nakano miku: 88
nakano nino: 87
nakano yotsuba: 89
nami: 200
nanami mami: 4
nanami: 19
naraku: 146
naruto: 203
natsu: 162
nezuko: 46
nico: 198
nobita: 119
obito: 211
oikawa tooru: 155
oreki: 182
orochimaru: 219
qiqi trinh: 28
raiden mei herrscher: 12
raiden mei: 13
raiden shogun: 27
ran: 191
raphtalia: 17
rei ayanami: 97
reki: 140
rem: 10
rengoku: 56
rikka: 81
rimuru: 150
ruby rose: 77
runa: 15
saber: 32
sabito: 54
sakura nanamine: 113
sakura saber: 33
sakura: 206
sakurasawa sumi: 6
sanji: 196
sarashina ruka: 5
sasori: 217
sasuke: 204
sato kazuma: 34
satoru gojo: 190
sesshoumaru: 147
shanks: 201
shido: 40
shigeo kageyama: 101
shikamaru: 226
shin: 128
shinichi: 192
shinobu: 52
shizuka: 120
siesta: 124
sistine fibel: 95
songoku: 232
sting eucliffe: 170
sukuna: 18
sungjinwoo: 178
syalis: 96
takegawa hotaru: 127
takemichi: 58
taki: 236
tamako: 115
tanaka: 154
tanjiro: 45
tanmoshi: 108
tatumaki: 106
temari: 227
tenten: 220
tobirama: 231
todoroki: 157
toga himiko: 134
toge inumaki: 82
tomoe: 148
trafalgar law: 202
tsubasa: 179
tsukishima: 151
tusnade: 207
uchiha shisui: 228
umaru: 104 saitama: 105
usagi tsukino: 129
uzaki: 156
vegeta: 233
violet: 114
wakabayashi: 180
wendy: 171
xiao: 85
yahiko: 208
yamauchi sakura: 9
yato: 1
yoriichi: 49
yosano akiko: 112
yugi: 79
yumeko: 136
yuri: 100
yuu otosaka: 2
yuzaki masa: 109
zenitsu: 47
zeref: 168
zero two: 110
zetsu: 218
zoro: 195`,attachment: fs.createReadStream(__dirname + "/cache/avtid.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/avtid.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/avtid.jpg")).on("close",() => callback());
   }
;