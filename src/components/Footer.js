export default function Footer() {
    const date = new Date();
    const today = date.getFullYear();

    return (
        <footer>
            <p>&copy; Travel Marvels {today}</p>
        </footer>
    );
}