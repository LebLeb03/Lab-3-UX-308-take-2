// File: Clothing_suggestion.js
function getClothingSuggestion(humidity, temperature){
        let clothing;
        if(humidity >60 && temperature >4){
            clothing = " Use rain jacket";
        }else if (humidity >60 && temperature <4){
            clothing = "Use winter jacket";
        }else if (humidity <60 && temperature <4){
            clothing = "Use warm jacket";
        }else if (humidity <60 && temperature >4){
            clothing = " Use light sweater";
        }
        return clothing; 
    }
    
export {getClothingSuggestion} 

