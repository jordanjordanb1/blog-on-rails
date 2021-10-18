# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create(title: "First Post", body: "This is the first post")
Post.create(
  title: "Second Post",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at scelerisque ex, vitae porta tortor. Praesent ut felis magna. Suspendisse suscipit lacinia lorem, eget placerat quam ullamcorper nec. Mauris tempus varius dui, eget tempor odio commodo vitae. Phasellus quis suscipit nunc. Ut porttitor lorem eros, nec congue libero aliquet sed. In congue elit id mollis viverra. In hac habitasse platea dictumst. Etiam ultricies ornare turpis."
)
Post.create(
  title: "Another Post About Something Random",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit turpis, efficitur at laoreet quis, mollis sit amet nulla. Duis pulvinar lacinia mi. Vivamus molestie, ipsum eget tristique dignissim, metus sem viverra mauris, ultrices feugiat turpis tellus vitae lectus. Maecenas blandit eros diam, a varius felis tristique sit amet. Ut lorem velit, ultricies sed tristique id, eleifend sit amet odio. Maecenas vehicula massa quis tristique faucibus. Duis ullamcorper nisi neque, id sagittis eros molestie ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent tempus turpis vel sapien elementum ullamcorper. Integer lobortis eleifend justo vitae."
)
