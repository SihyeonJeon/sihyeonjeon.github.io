export type AssetLike = string | { src: string } | null | undefined;

export function assetSrc(asset: AssetLike): string | undefined {
	return typeof asset === 'string' ? asset : asset?.src;
}
