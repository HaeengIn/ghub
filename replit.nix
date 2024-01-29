{ pkgs }: {
  deps = [
    pkgs.klibcShrunk
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}