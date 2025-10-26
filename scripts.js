/**
 * Opens the podcast details modal and dynamically updates content
 * @param {string} title - Title of the podcast
 * @param {number} seasons - Number of seasons (not yet used)
 * @param {Array<string>} tags - Genres/categories for the podcast
 * @param {string} updated - Last updated date text
 */

function openModal(title, seasons, tags, updated) {
            document.getElementById('modalPodcastTitle').textContent = title;  // Set the modal title text
            document.getElementById('modalUpdated').textContent = 'Last updated: ' + updated; // Update the "Last updated" field with provided date
            
            const genresContainer = document.getElementById('modalGenres');    // Actively insert tags into the genre section
            genresContainer.innerHTML = tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('');
            
            document.getElementById('podcastModal').classList.add('active');    // Show modal and prevent page scroll when open
            document.body.classList.add('modal-open');
        }