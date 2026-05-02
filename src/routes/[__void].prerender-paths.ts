import { createFileRoute } from "@tanstack/react-router";

/**
 * FIXME: This is needed otherwise, we will get "prerender: Failed to collect prerender paths. HTTP 404."
 * when we run `vp void deploy` because the prerenderer will try to fetch this endpoint to get the list of paths to prerender
 *
 * @see {@link https://discord.com/channels/1475973262193459293/1486949277698752593/1499339155606343802}
 */
export const Route = createFileRoute("/__void/prerender-paths")({
  server: {
    handlers: {
      GET: () => Response.json({ paths: [] }),
    },
  },
});
