import Link from 'next/link';

interface TecnologiasProps {
    name: string,
    url: string,
}

export function TecnologiasLink({ name, url }: TecnologiasProps) {
    return (
        <Link href={url}>
            <a target="_blank"> {name} </a>
        </Link>
    );
}