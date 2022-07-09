# Variante 1 - Générer une série key - value simple ----

key <- c("Nico","Phil","Elena","Jean-Marc","Sylvie")

value <- c(5,6,7,7,4)

mylist <- list()

for(i in 1:length(key)) {
  mylist[key[i]] <- value[i]
}

# Variante 2 - générer un df puis ensuite le JSON----

name <- c("Nico","Philippe","Elena","Jean-Marc","Sylvie")

score <- c(3,7,7,7,5)

df <- data.frame(name, score)

# Créer l'objet JSON----

library(jsonlite)
mydfjson <- toJSON(df,pretty=TRUE,auto_unbox=TRUE)

mydfjson

write(mydfjson, "mydfJSON.json")
