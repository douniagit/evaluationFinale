Mon Boudoir - evaluation finale Promo6

lien Heroku : https://monboudoir.herokuapp.com/
attention le lien avec Mlab ne se fait malheureusement pas...

lancer le projet en localhost:3000.
la DB est sur Mlab.

mot de passe pour l'acces partie admin:

mail: admin@admin.com

password:admin12345

blog responsive, avec possibilité d'inscription, ajout et suppression d'articles

//-------------------------------------

compte rendu des anomalies:

en front

*le put pour update les articles, ne fonctionne pas sur le front, mais ok postman

*page article individuelle et page profil, non stylisée et manque navbar

*partie user, il manque le post de commentaires et like sur articles

*la sauvegarde de brouillon pas realisée

en back

*le stockage du token pas reussi à etre fait car, je ne sais pas où mettre le l'authorisation dans le header niveau front (postman ok)

*le hash a été fait dans le middleware auth.js, mais j'arrivais pas à decrypter le hash avec bcrypt pour le login. Consequence, utilisation du middleware auth2.js sans cryptage.




