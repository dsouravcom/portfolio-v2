import { ProjectHeader } from "@/app/components/ProjectHeader";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Email Sandbox",
    description:
        "An SMTP testing platform for safely capturing and inspecting transactional emails during development and staging.",
};

const project = PORTFOLIO_DATA.projects.find(
    (item) => item.slug === "email-sandbox",
)!;

export default function Page() {
    return (
        <main className="min-h-screen bg-canvas">
            <ProjectHeader project={project} />

            <div className="mx-auto max-w-4xl px-6 pb-24">
                <section className="mb-16">
                    <h2 className="mb-6 text-2xl font-semibold tracking-tight text-ink">
                        Test transactional email safely
                    </h2>
                    <div className="max-w-none leading-relaxed text-muted">
                        <p className="text-lg">
                            Email Sandbox gives development and staging
                            environments a real SMTP endpoint, then captures
                            their outgoing messages in test inboxes. Messages
                            stay in the sandbox instead of being delivered to
                            real recipients, so signup, password-reset, and
                            other transactional email flows can be checked
                            before production.
                        </p>
                        <p className="mt-4">
                            Connect an application to smtp.email.dsourav.com on
                            port 2525 with the credentials for its inbox. The
                            same SMTP setup works with common clients such as
                            Nodemailer, Python smtplib, Java mail libraries,
                            Go, and PHP mail tools.
                        </p>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="mb-6 text-2xl font-semibold tracking-tight text-ink">
                        Inspect every message in one place
                    </h2>
                    <div className="max-w-none leading-relaxed text-muted">
                        <p className="text-lg">
                            Each captured email can be reviewed with its
                            sender, recipients, subject, headers, HTML body,
                            and plain-text body. Responsive previews help spot
                            layout issues at desktop, tablet, and mobile
                            widths. New messages arrive in the inbox with live
                            updates, without requiring a manual refresh.
                        </p>
                        <p className="mt-4">
                            Separate organizations and inboxes keep projects
                            and environments organized. Team roles control who
                            can manage inboxes and invitations or inspect
                            messages. Attachment names and metadata are
                            visible, while attachment file contents are
                            discarded.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="mb-6 text-2xl font-semibold tracking-tight text-ink">
                        Built as a full-stack email testing service
                    </h2>
                    <div className="max-w-none leading-relaxed text-muted">
                        <p className="text-lg">
                            The Angular client provides the inbox and message
                            preview experience. A NestJS backend handles
                            authentication, organizations, mailbox access, and
                            the HTTP API; a separate SMTP ingestion service
                            parses and stores captured mail in PostgreSQL.
                            Server-Sent Events carry new-message updates to
                            connected inboxes.
                        </p>
                        <p className="mt-4">
                            The Free plan includes 100 test emails per month
                            and one inbox, making it possible to try the
                            workflow without configuring a production email
                            provider.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
