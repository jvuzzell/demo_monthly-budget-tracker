import "../../main.js"; 
import "../../components/budgetSheetContainer/component.js";
import "../../components/quickStats/component.js";
import "../../components/budgetSheetContainer/subComponents/summaryHeader/component.js";
import "../../components/budgetSheetContainer/subComponents/summaryLine/component.js";
import "../../components/budgetSheetContainer/subComponents/transactionLine/component.js";
import "../../components/budgetSheetSelector/component.js";
import "../../components/budgetSheetFooter/component.js"; 
import { initExpandables } from 'expandables-js'; 
initExpandables();  
(function(){
    setTimeout(() => {
        document.querySelector( 'body' ).removeAttribute( 'data-loading-screen' ); 
        document.querySelector( 'body' ).setAttribute( 'data-overlay', 'inactive' );
    }, 750)
})();