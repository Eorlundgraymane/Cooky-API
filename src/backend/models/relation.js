import User from './basic/user.js';
import Role from './basic/role.js';
import UserRole from './xref/userRole.js';
import Profile from './basic/profile.js';
import Post from './basic/post.js';
import Image from './basic/image.js';
import Item from './basic/item.js';
import Recipe from './basic/recipe.js';
import ProfileImage from './xref/profileImage.js';
import PostImage from './xref/postImage.js';
import CommentImage from './xref/commentImage.js';
import ItemImage from './xref/itemImage.js';
import RecipeImage from './xref/recipeImage.js';
import ProfileRecipe from './xref/profileRecipes.js';
import Comment from './xref/comment.js';
import Like from './xref/like.js';


User.hasOne(Profile);
Profile.belongsTo(User);

Profile.hasMany(Post);
Post.belongsTo(Profile);
Post.hasMany(Like);
Post.hasMany(Comment);

Like.belongsTo(Post);
Like.belongsTo(Profile);

Comment.belongsTo(Post);
Comment.belongsTo(Profile);

User.belongsToMany(Role, { through: UserRole });

Image.belongsToMany(Profile, { through: ProfileImage });
Image.belongsToMany(Post, { through: PostImage });
Image.belongsToMany(Comment, { through: CommentImage });
Image.belongsToMany(Recipe, { through: RecipeImage });
Image.belongsToMany(Item, { through: ItemImage });

Recipe.belongsTo(Profile);
Recipe.belongsToMany(Profile, { through: ProfileRecipe });

Recipe.hasMany(Item);

export default this;

