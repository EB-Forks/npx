import { StdioOptions } from "child_process";

declare function npx(
  argv: npx.Options
): void | Promise<npx.ChildProcess | undefined>;

declare namespace npx {
  interface ChildProcess {
    code: number | null;
    stdout: string;
    stderr: string;
  }

  interface Options extends Arguments {
    installerStdio?: StdioOptions;
  }

  type Arguments = BaseArguments | ExtendedArguments;

  const foo: Arguments;

  interface BaseArguments {
    command: string;
    cmdOpts: string[];
    package: string[];
    packageRequested: boolean;
    isLocal: boolean;
    cmdHadVersion: boolean;
    shell: string | false;
    npm: string;

    /** Whether **yargs** was used to parse this. */
    noYargs: true;
  }

  interface ExtendedArguments extends BaseArguments {
    noYargs?: undefined;
    [x: string]: unknown;
    _: string[];
    $0: string;

    userconfig?: string;
    cache?: string;
    call?: string;
    quiet: boolean;
    alwaysSpawn?: boolean;
    noInstall?: boolean;
    shellAutoFeedback?: string;
    ignoreExisting?: boolean;
    nodeArg?: string;
  }

  function parseArgs(argv: string[], defaultNpm?: string): Arguments;

  namespace parseArgs {
    function showHelp(): void;
  }
}

export = npx;
