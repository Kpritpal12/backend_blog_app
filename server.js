// const express=require('express')
// const app=express();

// const cors=require('cors')


// app.use(cors())
// app.post('/',(req,res)=>{
//     res.send({name:'Invalid 404 Error'})
//     console.log(res)
    
// })
// app.post('/bollywood',(req,res)=>{
//     res.send([ {
//         id :'1',
//         title : 'John Abraham in Attack',
//         body : `Attack is an upcoming Hindi movie scheduled to be released on 26 Jan, 2022. The movie is directed by Lakshya Raj Anand and will feature John Abraham, Jacqueline Fernandez and Rakul Preet Singh as lead characters.`,
//         category : 'Bollywood',
//         date : 'January 26, 2022',
//         url : 'https://i.ytimg.com/vi/_HVOgUwv1YM/maxresdefault.jpg'
//     },
//     {
//         id :'2',
//         title : 'Aayush Sharma in Antim: The Final Truth',
//         body : `With intense action and drama (a tad too much), Antim: The Final Truth checks some of the boxes for mass entertainment.`,
//         category : 'Bollywood',
//         date : 'November 26, 2021',
//         url : 'https://images.hindustantimes.com/img/2021/09/07/550x309/antim_salman_khan_1631001005060_1631001022678.jpg'
//     },
//     {
//         id :'3',
//         title : 'Faran Aktar in Toofaan',
//         body : `Toofaan is a 2021 Bollywood sports-drama, helmed by Rakeysh Omprakash Mehra. The movie star Farhan Akhtar, Paresh Rawal and Mrunal Thakur in the lead roles. In Toofan, Farhan will be essaying the role of a boxer. The film is releasing on 16th July 2021 on OTT platform Amazon Prime.`,
//         category : 'Bollywood',
//         date : 'July 16, 2021',
//         url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdKKQK67XmgyU_8m9yl9FNUEHtMqxP_Rncg&usqp=CAU'
//     },
//     {
//         id :'4',
//         title : 'Allu Arjun in Pushpa: The Rise',
//         body : `Story of Pushpa Raj, a lorry driver in Seshachalam forests of South India, set in the backdrop of red sandalwood smuggling. Red Sandalwood is endemic to South-Eastern Ghats (mountain range) of India.`,
//         category : 'Bollywood',
//         date : 'December 17, 2021',
//         url : 'https://images.livemint.com/img/2021/05/14/1600x900/Pushpa_1620969459135_1620969466386.jpg'
//     },
//     {
//         id :'5',
//         title : 'Parineeti Chopra in Saina',
//         body : `The film follows the career highs and lows of the former world no 1, India’s ace shuttler, Saina Nehwal. It also pays tribute to the people who immensely contribute to her resilience and unbreakable spirit.`,
//         category : 'Bollywood',
//         date : 'March 26, 2021',
//         url : 'https://i.ytimg.com/vi/55XTHZtWtH4/maxresdefault.jpg'
//     }
//     ])
// })
// app.post('/fitness',(req,res)=>{
//     res.send([{
//         id : '1',
//         title : `Sweat now shine later`,
//         body : `Weight training is a type of strength training that uses weights for resistance. Weight training provides a stress to the muscles that causes them to adapt and get stronger, similar to the way aerobic conditioning strengthens your heart.`,
//         category : 'Fitness',
//         date : `February 22, 2022`,
//         url : 'https://www.prameyanews.com/wp-content/uploads/2021/12/photo-1521804906057-1df8fdb718b7.jpg'
//     },
//     {
//         id : '2',
//         title : `Balance`,
//         body : `Actively working to maintain and improve your balance and stability is incredibly important, especially as you age. Improving your balance can help you avoid falls and stay active and independent.`,
//         category : 'Fitness',
//         date : `March 22, 2022`,
//         url : `https://m.media-amazon.com/images/I/71SsT-9CTLL._SX425_.jpg`
//     },
//     {
//         id : '3',
//         title : `Aerobic`,
//         body : `Activity that you do for more than a few minutes at a time is aerobic training. When you're doing this type of exercise, your body uses your aerobic energy system for power. And, because that metabolic system uses oxygen to help create energy, your breathing rate increases.`,
//         category : 'Fitness',
//         date : `January 22, 2022`,
//         url : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKL-T2bZrDTop9JdkvZt-Fqf2VoFkVZNMtQ&usqp=CAU`,
//     },
//     {
//         id : '4',
//         title : `Sprint`,
//         body : `Sprinting is running over a short distance at the top-most speed of the body in a limited period of time. The use of starting blocks allows the sprinter to perform an enhanced isometric preload.`,
//         category : 'Fitness',
//         date : `January 26, 2022`,
//         url : `https://www.snackinginsneakers.com/wp-content/uploads/2020/07/Sprinting-vs-Jogging-2.jpg`,
//     }])  
// })
// app.post('/food',(req,res)=>{
//     res.send([    {
//         id :'1',
//         title : `Chicken Kabab Masala`,
//         body : `Chicken Kabab masala is a dish consisting of roasted marinated chicken chunks in spiced curry sauce. The curry is usually creamy and orange-coloured. The dish was popularized by cooks from the Indian subcontinent living in Great Britain and is offered at restaurants around the world.`,
//         category : 'Food',
//         date : `January 29, 2022`,
//         url : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCf3mTRyMMd2rEIOc-BbZNEkl3LeRhkA1zw&usqp=CAU`,
//     },
//     {
//         id :'2',
//         title : `Masala Dosa`,
//         body : `Masala dosa is a variation of the popular South Indian dosa, which has its origins in Tuluva Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar.`,
//         category : 'Food',
//         date : `January 29, 2022`,
//         url : `https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg`,
//     },
//     {
//         id :'3',
//         title : `Paneer Tikka`,
//         body : `Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. It is a vegetarian alternative to chicken tikka and other meat dishes. It is a popular dish that is widely available in India and countries with an Indian diaspora.`,
//         category : 'Food',
//         date : `January 29, 2022`,
//         url : `https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG`,
//     },
//     {
//         id :'4',
//         title : `Maach Bhaat`,
//         body : `Bengal has been famous for its food and cuisine ever since the establishment of civilization in the landscape of gluttons, made up of the sovereign state of Bangladesh (earlier East Bengal or East Pakistan) and the Indian state of West Bengal.`,
//         category : 'Food',
//         date : `January 29, 2022`,
//         url : `https://www.archanaskitchen.com/images/archanaskitchen/1-Author/ruby_pathak-yahoo.com/hilsa_fish_curry_bengali_style.JPG`,
//     },
//     {
//         id :'5',
//         title : `Malai Kofta`,
//         body : `It is a delicious dish of fried balls of potato and paneer in a rich and creamy mild gravy made with sweet onions and tomatoes. Malai means cream and kofta are fried balls. So malai kofta literally translates to koftas dunked in a creamy sauce. It is a popular Indian vegetarian dish in which potato paneer balls are served with a delicious, smooth, rich & creamy gravy.`,
//         category : 'Food',
//         date : `January 29, 2022`,
//         url : `https://www.carveyourcraving.com/wp-content/uploads/2021/09/Best-Malai-Kofta-recipe.jpg`,
//     }
// ])
// })
// app.post('/technology',(req,res)=>{
//    res.send([ {
//     id : '1',
//     title : `Cyber Security: Prevention is better than cure`,
//     body : `Cyber security can be described as the collective methods, technologies, and processes to help protect the confidentiality, integrity, and availability of computer systems, networks and data, against cyber-attacks or unauthorized access.`,
//     category : `Technology`,
//     date : `January 1, 2022`,
//     url : 'https://assets.thehansindia.com/h-upload/2021/12/11/1131197-cyber-security.webp'
// },
// {
//     id : '2',
//     title : `Blockchain`,
//     body : `The blockchain is an open, immutable distributed public ledger that allows transactions to take place in a decentralised manner without a need for a trusted third party. Bitcoin, the first successful cryptocurrency, is a peer-to-peer electronic payment system.`,
//     category : `Technology`,
//     date : `December 12, 2021`,
//     url : `	https://ventsmagazine.com/wp-content/uploads/2020/10/dn-blockchain.jpg`
// },
// {
//     id : '3',
//     title : `Artificial Intelligence (AI) & Machine Learning`,
//     body : `Machine learning is the science that will take artificial intelligence to a level beyond what humans can do. ML is used to create AI systems that can learn from data rather than through programming. This will allow machines to adapt to new challenges over time.`,
//     category : `Technology`,
//     date : `September 30, 2021`,
//     url : `	https://www.collegechalo.com/news/wp-content/uploads/2021/12/AIfea2.jpg`
// },
// {
//     id : '4',
//     title : `Internet of Things (IoT)`,
//     body : `The Internet of Things is a technological revolution that represents the future of computing and communications, and its development depends on dynamic technical innovation in a number of important fields, from wireless sensors to nanotechnology.`,
//     category : `Technology`,
//     date : `February 2, 2022`,
//     url : `https://www.bachly.com/wp-content/uploads/2018/08/internet-things.jpg`
// },
// {
//     id : '5',
//     title : `Cryptography`,
//     body : `It is data encryption technology which provides for secure communication in the presence of malicious third-parties—known as adversaries. Encryption uses an algorithm and a key to transform an input (i.e., plaintext) into an encrypted output (i.e., ciphertext).`,
//     category : `Technology`,
//     date : `April 21, 2022`,
//     url : `https://edge.app/wp-content/uploads/2019/05/crypto-crypto-edge.jpg`
// }
// ])
// })
// app.post('/tourism',(req,res)=>{
//     res.send([ {
//         id : '1',
//         title : `Kerala: God's Own Country`,
//         body : `An equable climate, beautiful and serene beaches, peaceful stretch of backwaters and canals, exotic wildlife and lush green hill stations are some of the main attractions of Kerala which make a wonderful place to visit.`,
//         category : 'Tourism',
//         date : `March 24, 2022`,
//         url : 'https://keralaconnections.co.uk/wp-content/uploads/2020/12/India-and-Kerala-Connection-Banner-image-backwaters.jpg'
//     },
//     {
//         id : '2',
//         title : 'Madhya Pradesh: The Heart of Incredible India',
//         body : `It is known as the “Heart of India” because of a lot many things that it has to offer. It has been home to cultural and spiritual heritage of almost all the religions.`,
//         category : 'Tourism',
//         date : `March 24, 2022`,
//         url : 'https://www.socialsamosa.com/wp-content/uploads/2020/08/2.jpg'
//     },
//     {
//         id : '3',
//         title : 'Karnataka: Famous Culture',
//         body : `Karnataka is primarily known for its Heritage destinations and its Wildlife/ National Parks. Apart from that, it is also famous for its magical hill stations and spectacular waterfalls.`,
//         category : 'Tourism',
//         date : `January 2, 2022`,
//         url : 'https://cdn.theculturetrip.com/wp-content/uploads/2017/10/karnataka-pattadakal.jpg'
//     },
//     {
//         id : '4',
//         title : 'Sikkim: Small But Beautiful',
//         body : `A part of the Eastern Himalaya, Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth.`,
//         category : 'Tourism',
//         date : `March 14, 2022`,
//         url : 'https://nitsikkim.ac.in/img/home/nitsikkim.jpg'
//     },
//     {
//         id : '5',
//         title : 'Punjab:River of five land',
//         body : `The Harmandir Sahib in Amritsar is the holiest site in Sikhism, and one of the most visited tourist attractions in India.`,
//         category : 'Tourism',
//         date : `February 24, 2022`,
//         url : 'https://www.adotrip.com/booking/extras/custom/TMX1512291534825461/images/6051f56232.jpg'
//     }
// ])
// })
// // app.post('/article',(req,res)=>{
// //     res.send([{ Id: 4, img: "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/07/amritsar-3083693_960_720.jpg", h2: 'Punjab: India Begin Here', p: `Punjab, a state bordering Pakistan, is the heart of India’s Sikh community. The city of Amritsar, founded in the 1570s by Sikh Guru Ram Das, is the site of Harmandir Sahib, the holiest gurdwara (Sikh place of worship). Known in English as the Golden Temple, and surrounded by the Pool of Nectar, it's a major pilgrimage site.`, h3: 'Tourism ', span: 'Februry 24,2022' },
// //     { Id: 5, img: "https://cf-assets.www.cloudflare.com/slt3lc6tev37/5UFGteYwYTmakGi1m4hh10/68451375d91f71ce26ebbe4bb8051f04/cryptographic-key.png", h2: 'Cryptography', p: `Cryptography, or cryptology, is the practice and study of techniques for secure communication in the presence of adversarial behavior.`, h3: 'Technology ', span: 'Februry 24,2022' },
// //     { Id: 6, img: "https://m.media-amazon.com/images/M/MV5BZmM4ZGNmZTgtNDllNi00MzUxLTg5NjQtZjdmMDEyMWVlY2E4XkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg", h2: 'Parineeti Chopra in saina', p: `Saina Nehwal, a badminton enthusiast, considers pursuing the sport full-time. When she starts training under an efficient coach, she soon becomes the best and ranks number one in the sport.`, h3: 'Bollywood ', span: 'Februry 24,2022' },
// //     { Id: 7, img: "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Malai-Kofta-Recipe.jpg", h2: 'Malai Kofta', p: `Kofta is a Middle Eastern dish made from ground lamb or beef mixed with onions, garlic, and spices. The meat mixture is shaped into balls, patties or logs, and then grilled and served with pita, salads, dips, and sauces.`, h3: 'Food ', span: 'Februry 24,2022' }])
// // })
// // app.post('/latest',(req,res)=>{
// //     res.send([{ Id: 1, img: 'https://s3.envato.com/files/326194671/DSC_4013.jpg', h2: 'Aerobic', p: `Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest along with a formal recovery plan.`, h3: 'Fitness', span: 'Janvary 2,2022' },
// //     { Id: 2, img: 'https://images.news18.com/ibnlive/uploads/2021/07/1625839961_farhan-akhtar.jpg?impolicy=website&width=510&height=356', h2: 'Farhan Aktar in Toofan', p: `Toofaan is a 2021 Indian Hindi-language sports drama film directed and produced by Rakeysh Omprakash Mehra, produced by Ritesh Sidhwani under Excel Entertainment and ROMP Pictures and starring producer Farhan Akhtar as a national level boxer alongside Mrunal Thakur and Paresh Rawal in the lead roles.`, h3: 'Bollywood', span: 'Janvary 2,2022' },
// //     { Id: 3, img: 'https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg', h2: 'Pneer Tikka', p: `Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. It is a vegetarian alternative to chicken tikka and other meat dishes. It is a popular dish that is widely available in India and countries with an Indian diaspora.`, h3: 'Food ', span: 'February 24, 2022' }])
// // })
// // app.post('/side',(req,res)=>{
// //     res.send([{ Id: 8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPyRZHXLeXT6OxmDQdU2AtwWKGN_xHzf_IA&usqp=CAU', h2: 'Madhya Pradesh:The Heart of Incredible India', h3: 'Tourism ', span: 'February 24, 2022' },
// //     { Id: 9, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrdf6g7uniI6jBGZblgSvfdGwaNqwS6U53w&usqp=CAU', h2: 'Balance', h3: 'Fitness ', span: 'February 24, 2022' },
// //     { Id: 10, img: 'https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg', h2: 'Blockchain', h3: 'Technology ', span: 'February 24, 2022' },
// //     { Id: 11, img: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Antim-_The_Final_Truth.jpg', h2: 'Aayush Sharma in Antim:The Final Truth', h3: 'Bollywood ', span: 'February 24, 2022' },
// //     { Id: 12, img: 'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg', h2: 'Masala Dosa', h3: 'Food ', span: 'March 14,2022' }])
// // })
// app.listen(5000,()=>{
//     console.log('server is running....')
// })
const express=require('express')
const app=express();

const cors=require('cors')


app.use(cors())
app.post('/',(req,res)=>{
    res.send({name:'gjk'})
    console.log(res)
    
})
app.post('/bollywood',(req,res)=>{
    res.send([{ Id: 1, img: 'https://i.ytimg.com/vi/_HVOgUwv1YM/maxresdefault.jpg', h2: "John Abraham in Attack", p: `John Abraham is an Indian actor, film producer and former model who appears in Hindi films. After modelling for numerous advertisements and companies, he made his film debut with Jism, earning a Filmfare Award for Best Male Debut nomination.`, h3: 'Bollywood ', span: 'Janvary 24,2022' },
    { Id: 2, img: 'https://images.hindustantimes.com/img/2021/09/07/550x309/antim_salman_khan_1631001005060_1631001022678.jpg', h2: 'Aayush Sharma in Antim:The Final Truth', p: `A man from humble origins works his way up to an influential position within organised crime. Nothing seems able to stop him until he runs into a police officer who takes his job to uphold justice very seriously.`, h3: 'Bollywood ', span: 'February 24, 2022' },
    { Id: 3, img:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdKKQK67XmgyU_8m9yl9FNUEHtMqxP_Rncg&usqp=CAU', h2: 'Farhan Aktar in Toofan', p: `Toofaan is a 2021 Indian Hindi-language sports drama film directed and produced by Rakeysh Omprakash Mehra, produced by Ritesh Sidhwani under Excel Entertainment and ROMP Pictures and starring producer Farhan Akhtar as a national level boxer alongside Mrunal Thakur and Paresh Rawal in the lead roles.`, h3: 'Bollywood', span: 'Janvary 2,2022' },
    { Id: 4, img: 'https://images.livemint.com/img/2021/05/14/1600x900/Pushpa_1620969459135_1620969466386.jpg', h2: 'Allu Arjun in Pushpa:The Rise', p: 'Allu Arjun is an Indian actor who predominantly works in Telugu films. He is one of the highest paid actors in South India and known for his dancing abilities, Allu is a recipient of several awards, including five Filmfare Awards South and five Nandi Awards.', h3: 'Bollywood ', span: 'March 14,2022' },
    { Id: 5, img: 'https://i.ytimg.com/vi/55XTHZtWtH4/maxresdefault.jpg', h2: 'Parineeti Chopra in saina', p: `Saina Nehwal, a badminton enthusiast, considers pursuing the sport full-time. When she starts training under an efficient coach, she soon becomes the best and ranks number one in the sport.`, h3: 'Bollywood ', span: 'Februry 24,2022' }])
    // console.log(res)   
})
app.post('/fitness',(req,res)=>{
    res.send([{ Id: 1, img: 'https://www.prameyanews.com/wp-content/uploads/2021/12/photo-1521804906057-1df8fdb718b7.jpg', h2: "Sweat now shine later", p: `Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest along with a formal recovery plan.`, h3: 'Fitness ', span: 'Janvary 24,2022' },
    { Id: 2, img: `https://m.media-amazon.com/images/I/71SsT-9CTLL._SX425_.jpg`, h2: 'Balance', p: `Actively working to maintain and improve your balance and stability is incredibly important, especially as you age. Improving your balance can help you avoid falls and stay active and independent.`,
     h3: 'Fitness ', span: 'February 24, 2022' },
    { Id: 3, img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKL-T2bZrDTop9JdkvZt-Fqf2VoFkVZNMtQ&usqp=CAU`, h2: 'Aerobic', p: `Activity that you do for more than a few minutes at a time is aerobic training. When you're doing this type of exercise, your body uses your aerobic energy system for power. And, because that metabolic system uses oxygen to help create energy, your breathing rate increases.`, h3: 'Fitness', span: 'Janvary 2,2022' },
    { Id: 4, img: `https://www.snackinginsneakers.com/wp-content/uploads/2020/07/Sprinting-vs-Jogging-2.jpg`, h2: 'Sprint', p:  `Sprinting is running over a short distance at the top-most speed of the body in a limited period of time. The use of starting blocks allows the sprinter to perform an enhanced isometric preload.`,
     h3: 'Fitness ', span: 'March 14,2022' },
    { Id: 5, img: `https://healthbeat.spectrumhealth.org/wp-content/uploads/2018/01/StretchMAIN.jpg`, h2: 'Flexibility', p: `Possibly one of the most important types of fitness training is flexibility and mobility. Flexibility is the ability of your muscles to stretch. Mobility is being able to move your joints and tissues through their full range of motion`,
    h3: 'Fitness ', span: 'Februry 24,2022' }])
    // console.log(res)   
})
app.post('/food',(req,res)=>{
    res.send([{ Id: 1, img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCf3mTRyMMd2rEIOc-BbZNEkl3LeRhkA1zw&usqp=CAU`, h2: "Chiken Tikka Masala", p: `Chicken tikka masala is a dish consisting of roasted marinated chicken chunks in spiced curry sauce. The curry is usually creamy and orange-coloured. The dish was popularized by cooks from the Indian subcontinent living in Great Britain and is offered at restaurants around the world.`, h3: 'Food ', span: 'Janvary 24,2022' },
    { Id: 2, img: `https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG`, h2: 'Pneer Tikka', p: `Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. It is a vegetarian alternative to chicken tikka and other meat dishes. It is a popular dish that is widely available in India and countries with an Indian diaspora.`, h3: 'Food ', span: 'February 24, 2022' },
    { Id: 3, img: `https://www.archanaskitchen.com/images/archanaskitchen/1-Author/ruby_pathak-yahoo.com/hilsa_fish_curry_bengali_style.JPG`, h2: 'Maach Bhaat', p: `Think Bengali cuisine and the first thing that comes to mind is maach bhaat or roshogolla and mishti doi. It’s sad how Bengali cuisine has been stereotyped to be just that. In reality, there’s so much more. It’s about time we bust the myths and let the world know that it’s not as fishy and sugary as one thinks.`, h3: 'Food', span: 'Janvary 2,2022' },
    { Id: 4, img: `https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg`, h2: 'Masala Dosa', p: 'Masala dosa is a variation of the popular South Indian dosa, which has its origins in Tuluva Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar. ', h3: 'Food ', span: 'March 14,2022' },
    { Id: 5, img: `https://www.carveyourcraving.com/wp-content/uploads/2021/09/Best-Malai-Kofta-recipe.jpg`, h2: 'Malai Kofta', p: `Kofta is a Middle Eastern dish made from ground lamb or beef mixed with onions, garlic, and spices. The meat mixture is shaped into balls, patties or logs, and then grilled and served with pita, salads, dips, and sauces.`, h3: 'Food ', span: 'Februry 24,2022' }])
})
app.post('/technology',(req,res)=>{
   res.send([{ Id: 1, img: 'https://assets.thehansindia.com/h-upload/2021/12/11/1131197-cyber-security.webp', h2: "Cyber Security:Prevention is better than cure", p: `Computer security, cybersecurity, or information technology security is the protection of computer systems and networks from information disclosure, theft of or damage to their hardware, software, or electronic data, as well as from the disruption or misdirection of the services they provide.`, h3: 'Technology ', span: 'Janvary 24,2022' },
   { Id: 2, img:  `	https://ventsmagazine.com/wp-content/uploads/2020/10/dn-blockchain.jpg`, h2: 'Blockchain', p: `A blockchain game is a video game that includes elements that use cryptography-based blockchain technologies.`, h3: 'Technology ', span: 'February 24, 2022' },
   { Id: 3, img:  `	https://www.collegechalo.com/news/wp-content/uploads/2021/12/AIfea2.jpg`, h2: 'Artifical inteligent (AI) & Machine Learning ', p: `Artificial intelligence and machine learning are the part of computer science that are correlated with each other. These two technologies are the most trending technologies which are used for creating intelligent systems.Although these are two related technologies and sometimes people use them as a synonym for each other, but still both are the two different terms in various cases.`, h3: 'Technology', span: 'September 31,2022' },
   { Id: 4, img: `https://www.bachly.com/wp-content/uploads/2018/08/internet-things.jpg`, h2: 'Internet of Thing (IOT)', p: 'The Internet of things describes physical objects that are embedded with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks.', h3: 'Technology ', span: 'March 14,2022' },
   { Id: 5, img: `https://edge.app/wp-content/uploads/2019/05/crypto-crypto-edge.jpg`, h2: 'Cryptography', p: `Cryptography, or cryptology, is the practice and study of techniques for secure communication in the presence of adversarial behavior.`, h3: 'Technology ', span: 'Februry 24,2022' }]) 
})
app.post('/tourism',(req,res)=>{
    res.send([{ Id: 1, img:'https://keralaconnections.co.uk/wp-content/uploads/2020/12/India-and-Kerala-Connection-Banner-image-backwaters.jpg', h2: "Kerala: God's Own Country", p: `Kerala, a state situated on the tropical Malabar Coast of southwestern India,'is one of the most popular tourist destinations in the countryNamed as one of the ten paradises of the world by National Geographic Traveler, Kerala is famous especially for its ecotourism initiatives and beautiful backwaters.`, h3: 'Tourism ', span: 'Janvary 24,2022' },
    { Id: 2, img: 'https://www.socialsamosa.com/wp-content/uploads/2020/08/2.jpg', h2: 'Madhya Pradesh:The Heart of Incredible India', p: `Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.Begun in the 10th century, its Hindu and Jain temples at Khajuraho are renowned for theircarvings of erotic scenes, most prominently Kandariya Mahadeva,a temple with more than 800 sculptures.`, h3: 'Tourism ', span: 'February 24, 2022' },
    { Id: 3, img: 'https://cdn.theculturetrip.com/wp-content/uploads/2017/10/karnataka-pattadakal.jpg', h2: 'Karnataka: One state Many Worids', p: `Karnataka is a state in southwest India with Arabian Sea coastlines. The capital, Bengaluru (formerly Bangalore), is a high-tech hub known for its shopping and nightlife. To the southwest, Mysore is home to lavish temples including Mysore Palace, former seat of the region’s maharajas.`, h3: 'Tourism', span: 'Janvary 2,2022' },
    { Id: 4, img: 'https://nitsikkim.ac.in/img/home/nitsikkim.jpg', h2: 'Sikkim: Small But Beautiful', p: 'Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes India’s highest mountain, 8,586m Kangchenjunga. Sikkim is also home to glaciers, alpine meadows and thousands of varieties of wildflowers.', h3: 'Tourism ', span: 'March 14,2022' },
    { Id: 5, img: 'https://www.adotrip.com/booking/extras/custom/TMX1512291534825461/images/6051f56232.jpg', h2: 'Punjab: India Begin Here', p: `Punjab, a state bordering Pakistan, is the heart of India’s Sikh community. The city of Amritsar, founded in the 1570s by Sikh Guru Ram Das, is the site of Harmandir Sahib, the holiest gurdwara (Sikh place of worship). Known in English as the Golden Temple, and surrounded by the Pool of Nectar, it's a major pilgrimage site.`, h3: 'Tourism ', span: 'Februry 24,2022' }])
})
app.post('/article',(req,res)=>{
    res.send([{ Id: 4, img: "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/07/amritsar-3083693_960_720.jpg", h2: 'Punjab: India Begin Here', p: `Punjab, a state bordering Pakistan, is the heart of India’s Sikh community. The city of Amritsar, founded in the 1570s by Sikh Guru Ram Das, is the site of Harmandir Sahib, the holiest gurdwara (Sikh place of worship). Known in English as the Golden Temple, and surrounded by the Pool of Nectar, it's a major pilgrimage site.`, h3: 'Tourism ', span: 'Februry 24,2022' },
    { Id: 5, img: "https://cf-assets.www.cloudflare.com/slt3lc6tev37/5UFGteYwYTmakGi1m4hh10/68451375d91f71ce26ebbe4bb8051f04/cryptographic-key.png", h2: 'Cryptography', p: `Cryptography, or cryptology, is the practice and study of techniques for secure communication in the presence of adversarial behavior.`, h3: 'Technology ', span: 'Februry 24,2022' },
    { Id: 6, img: "https://m.media-amazon.com/images/M/MV5BZmM4ZGNmZTgtNDllNi00MzUxLTg5NjQtZjdmMDEyMWVlY2E4XkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg", h2: 'Parineeti Chopra in saina', p: `Saina Nehwal, a badminton enthusiast, considers pursuing the sport full-time. When she starts training under an efficient coach, she soon becomes the best and ranks number one in the sport.`, h3: 'Bollywood ', span: 'Februry 24,2022' },
    { Id: 7, img: "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Malai-Kofta-Recipe.jpg", h2: 'Malai Kofta', p: `Kofta is a Middle Eastern dish made from ground lamb or beef mixed with onions, garlic, and spices. The meat mixture is shaped into balls, patties or logs, and then grilled and served with pita, salads, dips, and sauces.`, h3: 'Food ', span: 'Februry 24,2022' }])
})
app.post('/latest',(req,res)=>{
    res.send([{ Id: 1, img: 'https://s3.envato.com/files/326194671/DSC_4013.jpg', h2: 'Aerobic', p: `Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest along with a formal recovery plan.`, h3: 'Fitness', span: 'Janvary 2,2022' },
    { Id: 2, img: 'https://images.news18.com/ibnlive/uploads/2021/07/1625839961_farhan-akhtar.jpg?impolicy=website&width=510&height=356', h2: 'Farhan Aktar in Toofan', p: `Toofaan is a 2021 Indian Hindi-language sports drama film directed and produced by Rakeysh Omprakash Mehra, produced by Ritesh Sidhwani under Excel Entertainment and ROMP Pictures and starring producer Farhan Akhtar as a national level boxer alongside Mrunal Thakur and Paresh Rawal in the lead roles.`, h3: 'Bollywood', span: 'Janvary 2,2022' },
    { Id: 3, img: 'https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg', h2: 'Pneer Tikka', p: `Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. It is a vegetarian alternative to chicken tikka and other meat dishes. It is a popular dish that is widely available in India and countries with an Indian diaspora.`, h3: 'Food ', span: 'February 24, 2022' }])
})
app.post('/side',(req,res)=>{
    res.send([{ Id: 8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPyRZHXLeXT6OxmDQdU2AtwWKGN_xHzf_IA&usqp=CAU', h2: 'Madhya Pradesh:The Heart of Incredible India', h3: 'Tourism ', span: 'February 24, 2022' },
    { Id: 9, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrdf6g7uniI6jBGZblgSvfdGwaNqwS6U53w&usqp=CAU', h2: 'Balance', h3: 'Fitness ', span: 'February 24, 2022' },
    { Id: 10, img: 'https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg', h2: 'Blockchain', h3: 'Technology ', span: 'February 24, 2022' },
    { Id: 11, img: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Antim-_The_Final_Truth.jpg', h2: 'Aayush Sharma in Antim:The Final Truth', h3: 'Bollywood ', span: 'February 24, 2022' },
    { Id: 12, img: 'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg', h2: 'Masala Dosa', h3: 'Food ', span: 'March 14,2022' }])
})
app.listen(5000,()=>{
    console.log('server is running....')
})