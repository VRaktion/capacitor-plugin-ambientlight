export interface AmbientLightPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
