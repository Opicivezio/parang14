const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzQyNzA2MDI2ODU5NTkzNzM5.XzKA4w.rF_0pdxl9iqvdVHcGr1OFaRTTbQ';
//const moment = require("moment");
//require("moment-duration-format");
const welcomeChannelName = "8공지사항8";
//const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "파랑이이 디코방에 오신것을 환영합니다!!";
//const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: "'ㅇ 도움'으로 명령어 알아보기" }, status: 'online' })
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);
  const exampleembed = new Discord.RichEmbed()
  .addField('환영합니다!', `<@${newUser.id}> ${welcomeChannelComment}\n`);
  welcomeChannel.send(exampleembed)



  member.addRole(guild.roles.find(role => role.name == "시청자"));
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ㅇ 핑') {
    const exampleembed = new Discord.RichEmbed()
    .addField('봇 지연시간', `<@${message.author.id}>님께서 요청하신 파랑이이 봇의 핑은 ${client.ping}m/s입니다.`)
    message.channel.send(exampleembed)
  }
  
  if(message.content == 'ㅇ 아이디'){
      const exampleembed = new Discord.RichEmbed()
      .addField('아이디', `<@${message.author.id}>님께서 요청하신 <@${message.author.id}>님의 아이디는 ${message.author.id}입니다.`)
      message.channel.send(exampleembed)
  }

  if(message.content == 'ㅇ 게임') {
    let img = 'https://media.discordapp.net/attachments/736218845408133211/743806668151848990/34baa9161e6cc710.png';
    let player = 'https://media.discordapp.net/attachments/736218845408133211/743806310234980422/PLAYER.png';
    let embed = new Discord.RichEmbed()
      .setTitle('파랑이이가 하는 게임')
      .setURL('https://twitch.tv/parang14')
      .setAuthor('파랑이이', img, 'https://twitch.tv/parang14')
      .setThumbnail(img)
      .addBlankField()
      .addField('HyperScape', 'Jhroy14', true)
      .addField('ROBLOX', 'jhroy14', true)
      .addField('MINECRAFT', 'RoyPark13 - 서버는 생방송', true)
      .addField('League of Legend', '박로이14', true)
      .addField('VALORANT', '파랑이#파랑이이', true)
      .addField('GTA5', 'jhroy14', true)
      .addField('OVERWATCH', '파랑이이#3840', true)
      .addField('IRON SIGHT', '아직 안알려줌', true)
      .addField('RAINBOW SIX | SIEGE', '아직 안알려줌', true)
      .addField('KARTRIDER', '스컬tv', true)
      .addField('ELSWORD', '파랭이잉', true)
      .addField('FORTNITE', 'jhroy14', true)
      .addField('BATTLEGROUND', 'STEAM_BATTLEGROUND - BLUE-229\nKAKAO_BATTLEGROUND - 아직 안알려줌')
      .addBlankField()
      .setTimestamp()
      .setFooter('MADE BY 𝓟𝓛𝓐𝓨𝓔𝓡', player)

    message.channel.send(embed)
  } else if(message.content == 'ㅇ 정보') {
    let img = 'https://media.discordapp.net/attachments/736218845408133211/743806668151848990/34baa9161e6cc710.png';
    let player = 'https://media.discordapp.net/attachments/736218845408133211/743806310234980422/PLAYER.png';
    let embed = new Discord.RichEmbed()
    .setThumbnail(img)
    .setAuthor('파랑이이', img, 'https://twitch.tv/parang')
    .addBlankField()
    .addField('나이', '14세 / 중1')
    .addField('파랑이이 유튜브', 'https://www.youtube.com/channel/UCWyXSvjGLnlu0Wtqablno4Q/featured')
    .addField('파랑이이 트위치', 'https://twitch.tv/parang14')
    .addField('파랑이이 인스타', 'https://www.instagram.com/roypark14/')
    .setTimestamp()
    .setFooter('MADE BY 𝓟𝓛𝓐𝓨𝓔𝓡', player)

    message.channel.send(embed)
  } else if(message.content == 'ㅇ 파랑이이') {
    let img = 'https://media.discordapp.net/attachments/736218845408133211/743806668151848990/34baa9161e6cc710.png';
    let player = 'https://media.discordapp.net/attachments/736218845408133211/743806310234980422/PLAYER.png';
    let embed = new Discord.RichEmbed()
    .setAuthor('파랑이이', img, 'https://twitch.tv/parang')
    .addField('파랑이이 상태', '파랭이 말라가는중')
    .setTimestamp()
    .setFooter('MADE BY 𝓟𝓛𝓐𝓨𝓔𝓡', player)

    message.channel.send(embed)
  } else if(message.content == 'ㅇ 유튜브') {
    let img = 'https://media.discordapp.net/attachments/736218845408133211/743806668151848990/34baa9161e6cc710.png';
    let player = 'https://media.discordapp.net/attachments/736218845408133211/743806310234980422/PLAYER.png';
    let embed = new Discord.RichEmbed()
    .setTitle('파랑이이 유튜브')
    .setThumbnail(img)
    .setAuthor('파랑이이', img, 'https://www.youtube.com/channel/UCWyXSvjGLnlu0Wtqablno4Q/featured')
    .addBlankField()
    .addField('파랑이이 유튜브', 'https://www.youtube.com/channel/UCWyXSvjGLnlu0Wtqablno4Q/featured')
    .addField('1. [파랑이이] 첫 영상', 'https://www.youtube.com/watch?v=kzKwE06nkgg')
    .addField('2. AUE탈퇴... 및 KSJI크루 모집!!', 'https://www.youtube.com/watch?v=6tUe-9t4OKY')
    .addField('3. 생방송 [오버워치]', 'https://www.youtube.com/watch?v=qyBO0cIvTik')
    .addField('4. [PLAYGROUND] 배그 아님 마인크래프트 서버!', 'https://www.youtube.com/watch?v=SqEG8Ydberw')
    .addField('5. NPC 마을', 'https://www.youtube.com/watch?v=duhqK2zqUag')
    .addField('6. 마크영상2', 'https://www.youtube.com/watch?v=VFiTBajcNsA')
    .addField('7. 피터지는 모바일배그 생존기', 'https://www.youtube.com/watch?v=OKLb1HmGBRs')
    .addField('8. 재밌냐 갈곰아? [카트라이더]', 'https://www.youtube.com/watch?v=bEm1xTC-3U0')
    .setTimestamp()
    .setFooter('MADE BY 𝓟𝓛𝓐𝓨𝓔𝓡', player)

    message.channel.send(embed)
  } else if(message.content == 'ㅇ 트위치') {
    let img = 'https://media.discordapp.net/attachments/736218845408133211/743806668151848990/34baa9161e6cc710.png';
    let player = 'https://media.discordapp.net/attachments/736218845408133211/743806310234980422/PLAYER.png';
    let embed = new Discord.RichEmbed()
    .setAuthor('파랑이이', img, 'https://twitch.tv/parang')
    .addField('파랑이이 트위치', 'https://twitch.tv/parang14')
    .setTimestamp()
    .setFooter('MADE BY 𝓟𝓛𝓐𝓨𝓔𝓡', player)

    message.channel.send(embed)
  } else if(message.content == 'ㅇ 시간') {
    let embed = new Discord.RichEmbed()
    .addField('시간', '니가 알아서 보지?')
    message.channel.send(embed)
  } else if(message.content == 'ㅇ 도움') {
    let helpImg = 'https://media.discordapp.net/attachments/736218845408133211/743806668151848990/34baa9161e6cc710.png';
    let commandList = [
      {name: 'ㅇ 도움', desc: '명령어 확인'},
      {name: 'ㅇ 게임', desc: '파랑이이가 하는 게임'},
      {name: 'ㅇ 정보', desc: '파랑이이 정보'},
      {name: 'ㅇ 유튜브', desc: '파랑이이 유튜브 채널'},
      {name: 'ㅇ 트위치', desc: '파랑이이 트위치 채널'},
      {name: 'ㅇ 핑', desc: '현재 핑 상태'},
      {name: 'ㅇ 아이디', desc: '아이디 확인하기'},
      {name: 'ㅇ 공지', desc: '서버에 있는 사람 모두에게 DM형식으로 공지보내기'},
      {name: 'ㅇ 초대', desc: '파랑이이 디코방 무제한 초대링크 생성'},
      {name: 'ㅇ 시간', desc: '현재 시간 확인'},
      {name: 'ㅇ 주사위', desc: '1 ~ 6 주사위 굴리기'},
      {name: 'ㅇ 주사위 100', desc: '1 ~ 100 주사위 굴리기'},
      {name: 'ㅇ 주사위 1000', desc: '1 ~ 1000 주사위 굴리기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 파랑이이_Bot', helpImg)
      .setColor('#FFFFFF')
      .setFooter(`파랑이이_BOT`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  } else if(message.content == '!초대코드2') {
    client.guilds.array().forEach(x => {
      x.channels.find(x => x.type == 'text').createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then(invite => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if(err.code == 50013) {
            message.channel.send('**'+x.channels.find(x => x.type == 'text').guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
          }
        })
    });
  } else if(message.content == 'ㅇ 초대') {
    if(message.channel.type == 'dm') {
      return message.reply('게인메세지에서 사용할 수 없는 명령어 입니다.');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
        }
      })
  } else if(message.content.startsWith('ㅇ 공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('ㅇ 공지'.length);
      let embed = new Discord.RichEmbed()
        .setAuthor('공지 of 파랑이이_bot')
        .setColor('#FFFFFF')
        .setFooter(`파랑이이_BOT`)
        .setTimestamp()
  
      embed.addField('관리자로부터 온 공지: ', contents);
  
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(embed)
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('ㅇ 주사위 1000')) {
    let min = 1;
    let max = 1000;
    let dice_num = parseInt(Math.random() * (max - min) + min);
    const exampleembed = new Discord.RichEmbed()
    .addField('주사위', `${dice_num}이/가 나왔습니다.`)
    //.addField('주사위', '10이/가 나왔습니다.')
    message.channel.send(exampleembed)
  } else if(message.content.startsWith('ㅇ 주사위 100')) {
    let min = 1;
    let max = 100;
    let dice_num = parseInt(Math.random() * (max - min) + min);
    const exampleembed = new Discord.RichEmbed()
    .addField('주사위', `${dice_num}이/가 나왔습니다.`)
    //.addField('주사위', '10이/가 나왔습니다.')
    message.channel.send(exampleembed)
  } else if(message.content.startsWith('ㅇ 주사위')) {
    let min = 1;
    let max = 6;
    let dice_num = parseInt(Math.random() * (max - min) + min);
    const exampleembed = new Discord.RichEmbed()
    .addField('주사위', `${dice_num}이/가 나왔습니다.`)
    //.addField('주사위', '10이/가 나왔습니다.')
    message.channel.send(exampleembed)
  } }
);

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);