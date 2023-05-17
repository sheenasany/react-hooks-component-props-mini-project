function makeEmojiList(minutes) {
    const interval = minutes < 30 ? 5 : 10;
    const emoji = minutes < 30 ? "☕️" : "🍱";

    let emojis = "";
    for (let i = 0; i < minutes; i += interval) {
        emojis += emoji;
    }

    return emojis;
}

function Article ({ title, date ="January 1, 1970", preview, minutes}) {
    const emojis = makeEmojiList(minutes)

    return (
        <div>
            <article>
                <h3>{title}</h3>
                <small>{date} ⁕ {emojis} {minutes} min read</small>
                <p>{preview}</p>
            </article>
        </div>
    )

}

export default Article

// // an <h3> element displaying the title of the article, passed as a prop
// a <small> element displaying the date of the article, passed as a prop
// a default value of "January 1, 1970" should be used if no date is passed as a prop
// a <p> element displaying the preview of the article, passed as a prop