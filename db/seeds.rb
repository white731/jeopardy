# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Thing.destroy_all
Category.destroy_all

Thing.create(name:Faker::FunnyName.name)
Thing.create(name:Faker::FunnyName.name)
Thing.create(name:Faker::FunnyName.name)

cows = Category.create(name:"Cows")
plants = Category.create(name:"plants")
programming = Category.create(name:"programming")
family = Category.create(name:"family")
travel = Category.create(name:"travel")

cows.cards.create(question: "Do Cows have horns?", answer1:"Yes", answer2:"No", answer3:"Depends on the breed", answer4:"only bulls have them", correct_answer:"Depends on the breed", points: 100)
cows.cards.create(question: "What is not a color or a cow?", answer1:"Black", answer2:"White", answer3:"Red", answer4:"Purple", correct_answer:"Purple", points: 200)
cows.cards.create(question: "What is the name of the place where cows are milked?", answer1:"Dairy Farm", answer2:"Slaugter house", answer3:"The Milk Factory", answer4:"The cow hotel", correct_answer:"Dairy Farm", points: 300)
cows.cards.create(question: "What is the name of baby cow?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"Calf", points: 400)

plants.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 100)
plants.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 200)
plants.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 300)
plants.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 400)

programming.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 100)
programming.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 200)
programming.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 300)
programming.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 400)

family.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 100)
family.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 200)
family.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 300)
family.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 400)

travel.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 100)
travel.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 200)
travel.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 300)
travel.cards.create(question: "?", answer1:"", answer2:"", answer3:"", answer4:"", correct_answer:"", points: 400)

puts "seeded"