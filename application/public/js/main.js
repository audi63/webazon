// Point d'entrée principal de l'application
import htmlAssets from './assets.js';
import { addElementToPreview, resetEditor } from './components/editor.js';
import { copyCompleteCode } from './components/preview.js';
import { restoreState } from './components/state.js';
import { initSelectiveCopy } from './utils/selective-copy.js';
import { initCustomizationAccordion } from './components/customization.js';

/**
 * Obtient un élément HTML à partir de son chemin dans l'objet htmlAssets
 * @param {string} path - Le chemin de l'élément dans l'objet htmlAssets
 * @returns {Object} L'élément HTML correspondant
 */
export function getElementByPath(path) {
    return path.split('.').reduce((obj, key) => obj[key], htmlAssets.assets);
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser la copie sélective
    initSelectiveCopy();
    
    // Initialiser l'accordéon de personnalisation
    initCustomizationAccordion();

    // Ajouter l'événement de copie du code
    const copyBtn = document.getElementById('copyCodeBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', copyCompleteCode);
    }
    
    // Restaurer l'état sauvegardé
    restoreState();
    
    // Ajouter l'événement de réinitialisation
    const resetBtn = document.getElementById('resetEditor');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetEditor);
    }
}); 