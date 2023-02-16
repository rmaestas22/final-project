puts "seeding..."

puts 'seeding users'
User.create(name: 'ray', password: '123')

puts "seeding items"
  shirt1 = Item.create(name:"Asphyxia", image:"https://i.imgur.com/DixTe0S.jpeg" , size:"S,M,L,XL,XXL" , price:25)
  shirt2 = Item.create(name:"Same old Nic", image:"https://i.imgur.com/oA2g9LH.jpeg" , size:"S,M,L,XL,XXL" , price:25)
  shirt3 = Item.create(name:"Heart in a Glass Jar", image:"https://i.imgur.com/Fhd62Qf.jpeg",  size:"S,M,L,XL,XXL" , price:25)
  shirt4 = Item.create(name:"Great Gig", image:"https://i.imgur.com/YoLn1CG.jpeg" , size:"S,M,L,XL,XXL" , price:25)
  shirt5 = Item.create(name:"Awesom", image:"https://i.imgur.com/iUc222J.jpeg" , size:"S,M,L,XL,XXL" , price:25)
  hoody1 = Item.create(name:"White Rabbit", image:"https://i.imgur.com/aWBcW6z.jpeg" , size:"S,M,L,XL,XXL" , price:50)

# puts "seeding user"
#   User.create(name:"Ray", password:"123")


puts "creating band members"
  jacob = Band.create(name:"Jacob Maestas" , image:"https://i.imgur.com/Ot3QU9f.jpeg" , instrument:"Guitar/vocals/synth")
  ben = Band.create(name:"Ben Eberle" , image:"https://i.imgur.com/JcQKySV.jpeg " , instrument:"Bass/Vocals/Guitar")
  bo = Band.create(name:"Bo Brooks" , image:"https://i.imgur.com/80PZUX1.jpeg " , instrument:"Sax/Vocals/synth")
  diego = Band.create(name:"Diego Lucero" , image:"https://i.imgur.com/kHzirQv.jpeg " , instrument:"Drums")
  e = Band.create(name:"E Lyon Xavier" , image:"https://i.imgur.com/WIXbNxo.jpeg " , instrument:"Percussion")
  peter = Band.create(name:"Peter Koschnitzke" , image:"https://i.imgur.com/6f1vlzW.jpeg" , instrument:"Guitar")


puts 'seeding carts'

Cart.create([
  {
    user_id: User.ids.sample
  },
    {
    user_id: User.ids.sample
  },
    {
    user_id: User.ids.sample
  },
])
  puts "done seeding"